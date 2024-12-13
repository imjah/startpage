import { writable } from 'svelte/store';
import { Config } from './config'

export type URL  = string

export interface Channel {
  url: string;
  name: string;
  displayName: string;
  videos: Video[];
}

export interface Video {
  url: string;
  title: string;
  uploaderUrl: string;
  uploaderName: string;
  uploaded: number;
  uploadedDate: string;
}

export class Channels {
  static LS_CACHE = 'channels'
  static LS_CACHE_UPDATE_TIME = 'channelsUpdateTime'

  static async set(url: string | URL, partial = false): Promise<void> {
    let id = this.#parseId(url)

    if (id === undefined)
      return new Promise((_, reject) => reject(`No URL found in ${url}`))

    return (
        this.#isPlaylist(url)
      ? this.#fetchPlaylist(id, url)
      : this.#fetchChannel(id, url)
    ).then(channel => partial
      ? this.update(url, {videos: channel.videos})
      : channels.update(s => s.set(url, channel))
    )
  }

  static update(id: URL, values: any) {
    channels.update(s => s.set(id, {...s.get(id), ...values}))
  }

  static delete(id: URL) {
    channels.update(s => {
      s.delete(id)
      return s
    })
  }

  static async refetch(cache = true) {
    if (cache && this.#isCacheUpToDate())
      return

    console.log('Fetching ...')

    channels.update(v => {
      v.forEach((_, id) => this.set(id, true))
      return v
    })

    this.#resetCacheUpdateTime()
  }

  static get save() {
    try {
      return JSON.parse(localStorage[this.LS_CACHE] || '[]')
    }
    catch (e) {
      return {}
    }
  }

  static saveOnUpdate() {
    channels.subscribe(c => localStorage[this.LS_CACHE] = JSON.stringify([...c]))
  }

  static async #fetchChannel(id: URL, url: string): Promise<Channel> {
    return fetch(`${Config.get.instance.value}/channels/tabs?data={"id":"${id}","contentFilters":["videos"]}`)
          .then(response => response.json())
          .then(response => ({
            'url': url,
            'name': response?.content[0]?.uploaderName,
            'displayName': '',
            'videos': response.content.map((video: Video) => ({
              'url': `https://youtube.com${video.url}`,
              'title': video.title,
              'uploaderUrl': video.uploaderUrl,
              'uploaderName': video.uploaderName,
              'uploaded': video.uploaded,
              'uploadedDate': video.uploadedDate
            }))
          }))
  }

  static async #fetchPlaylist(id: URL, url: string): Promise<Channel> {
    return fetch(`${Config.get.instance.value}/playlists/${id}`)
          .then(response => response.json())
          .then(response => ({
            'url': url,
            'name': response.name,
            'displayName': '',
            'videos': response.relatedStreams.map((video: Video) => ({
              'url': `https://youtube.com${video.url}`,
              'title': video.title,
              'uploaderUrl': video.uploaderUrl,
              'uploaderName': video.uploaderName,
              'uploaded': video.uploaded,
              'uploadedDate': video.uploadedDate
            }))
          }))
  }

  static #getCacheUpdateTime(): number {
    return parseInt(
      localStorage[this.LS_CACHE_UPDATE_TIME]
    )
  }

  static #resetCacheUpdateTime() {
    localStorage[this.LS_CACHE_UPDATE_TIME] = Date.now()
  }

  static #isCacheUpToDate(): boolean {
    const cacheUpdateTime = this.#getCacheUpdateTime()

    if (typeof cacheUpdateTime === 'number')
      return Date.now() < (cacheUpdateTime + Config.get.cacheLifetimeInMinutes * 60000)

    return false
  }

  static #parseId(url: string): URL | undefined {
    let delimeter = this.#isPlaylist(url) ? '=' : '/'

    return url.split(delimeter).pop()
  }

  static #isPlaylist(url: string): boolean {
    return url.includes('playlist')
  }

  static byUploaded(a: Video, b: Video) {
    return b.uploaded - a.uploaded
  }

  static toFeedItem(channel: Channel) {
    return channel.videos.map((video: Video) => ({
      ...video,
      channelUrl: channel.url,
      channelName : channel.name,
      channelDisplayName : channel.displayName
    }))
  }
}

export let channels = writable<Map<URL, Channel>>(new Map(Channels.save))