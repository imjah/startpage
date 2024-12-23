import { writable, get } from 'svelte/store';
import { Piped } from '../util/piped'
import { LocalStorage } from '../util/storage'
import { Config, config } from './config'
import { status } from './status'

export type URL  = string

export interface Channel {
  name: string;
  displayName: string;
  videos: Video[];
}

export interface Video {
  url: string;
  title: string;
  uploaded: number;
  uploadedDate: string;
}

export interface ChannelVideo extends Video {
  channelUrl: string;
  channelName: string;
  channelDisplayName: string;
}

export class Channels extends LocalStorage {
  static LS_NAME = 'channels'

  static saveOnUpdate() {
    channels.subscribe(s => super.set([...s]))
  }

  static async search(query: string) {
    if (query.length == 0)
      return Promise.resolve([])

    return Piped.search(query, Piped.FILTER_CHANNELS).then(r => r.json())
  }

  static async add(url: string | URL, partial = false, reload = false): Promise<void> {
    let id = this.#parseId(url)

    if (id === undefined)
      return new Promise((_, reject) => reject(`No URL found in ${url}`))

    return (
        this.#isPlaylist(url)
      ? this.#fetchPlaylist(id, url, reload)
      : this.#fetchChannel(id, url, reload)
    ).then(channel => partial
      ? this.update(url, {videos: channel.videos})
      : channels.update(s => s.set(url, channel))
    )
  }

  static update(id: URL, values: any) {
    channels.update(s => s.set(id, {...s.get(id), ...values}))
  }

  static remove(id: URL) {
    channels.update(s => {
      s.delete(id)
      return s
    })
  }

  static toArray(selected: [URL, Channel] | Map<URL, Channel>): ChannelVideo[] {
    return this.#toArray(
      selected instanceof Map ? [...selected.entries()] : [selected]
    )
  }

  static #toArray(selected: Array<[URL, Channel]>): ChannelVideo[] {
    return selected.flatMap(([url, channel]) => channel.videos.map(video => ({
      ...video,
      channelUrl: url,
      channelName : channel.name,
      channelDisplayName : channel.displayName
    })))
  }

  static BY_UPLOADED = (a: Video, b: Video) => b.uploaded - a.uploaded

  static async refetch() {
    const reload = !this.#isFeedFresh()

    channels.update(v => {
      v.forEach((_, id) => this.add(id, true, reload))
      return v
    })

    this.#resetFeedFetchedAt()
  }

  static #isFeedFresh() {
    return Date.now() < (get(status).feed.fetchedAt + get(config).cacheLifetimeInMinutes * 60000)
  }

  static #resetFeedFetchedAt() {
    status.update(s => { s.feed.fetchedAt = Date.now(); return s })
  }

  static async #fetchChannel(id: URL, url: string, reload: boolean): Promise<Channel> {
    return fetch(`${Config.get.instance.value}/channels/tabs?data={"id":"${id}","contentFilters":["videos"]}`, {cache: reload ? 'reload' : 'default'})
          .then(response => response.json())
          .then(response => ({
            'url': url,
            'name': response?.content[0]?.uploaderName,
            'displayName': '',
            'videos': response.content.map((video: Video) => ({
              'url': `https://youtube.com${video.url}`,
              'title': video.title,
              'uploaded': video.uploaded,
              'uploadedDate': video.uploadedDate
            }))
          }))
  }

  static async #fetchPlaylist(id: URL, url: string, reload: boolean): Promise<Channel> {
    return fetch(`${Config.get.instance.value}/playlists/${id}`, {cache: reload ? 'reload' : 'default'})
          .then(response => response.json())
          .then(response => ({
            'url': url,
            'name': response.name,
            'displayName': '',
            'videos': response.relatedStreams.map((video: Video) => ({
              'url': `https://youtube.com${video.url}`,
              'title': video.title,
              'uploaded': video.uploaded,
              'uploadedDate': video.uploadedDate
            }))
          }))
  }

  static #parseId(url: string): URL | undefined {
    let delimeter = this.#isPlaylist(url) ? '=' : '/'

    return url.split(delimeter).pop()
  }

  static #isPlaylist(url: string): boolean {
    return url.includes('playlist')
  }
}

export let channels = writable<Map<URL, Channel>>(new Map(Channels.get()))
