import { writable } from 'svelte/store';

let config = {
  instance: 'https://api.piped.yt'
}

export type ID  = string
export type URL = string

export interface Video {
  url: string;
  title: string;
  uploaderUrl: string;
  uploaderName: string;
  uploaded: number;
  uploadedDate: string;
}

export interface Channel {
  name: string;
  videos: Video[];
}

export default class Channels {
  static LS_CACHE = 'channels'
  static LS_CACHE_UPDATE_TIME = 'channelsUpdateTime'

  static store = writable<Map<ID, Channel>>(
    new Map(
      JSON.parse(localStorage[this.LS_CACHE] || '[]')
    )
  )

  static async set(url: URL | ID): Promise<void> {
    let id = this.#parseId(url)

    if (id === undefined)
      return new Promise((_, reject) => reject(`No ID found in ${url}`))

    return (
        this.#isPlaylist(url)
      ? this.#fetchPlaylist(id)
      : this.#fetchChannel(id)
    ).then(channel => this.store.update(s => s.set(url, channel)))
  }

  static update(id: ID, values) {
    this.store.update(s => s.set(id, {...s.get(id), ...values}))
  }

  static delete(id: ID) {
    this.store.update(s => {
      s.delete(id)
      return s
    })
  }

  static subscribeToLocalStorage() {
    this.store.subscribe(v => 
      localStorage[this.LS_CACHE] = JSON.stringify(v, (_, value) => 
        value instanceof Map ? [...value] : value
      )
    )
  }

  static async refetch(cache = true) {
    if (cache && this.#isCacheUpToDate())
      return

    this.store.update(v => {
      v.forEach((_, id) => this.set(id))
      return v
    })

    this.#resetCacheUpdateTime()
  }

  static async #fetchChannel(id: ID): Promise<Channel> {
    return fetch(`https://api.piped.yt/channels/tabs?data={"id":"${id}","contentFilters":["videos"]}`)
          .then(response => response.json())
          .then(response => ({
            'name': response?.content[0]?.uploaderName,
            'videos': response.content.map((video: Video) => ({
              'url': video.url,
              'title': video.title,
              'uploaderUrl': video.uploaderUrl,
              'uploaderName': video.uploaderName,
              'uploaded': video.uploaded,
              'uploadedDate': video.uploadedDate
            }))
          }))
  }

  static async #fetchPlaylist(id: ID): Promise<Channel> {
    return fetch(`${config.instance}/playlists/${id}`)
          .then(response => response.json())
          .then(response => ({
            'name': response.name,
            'videos': response.relatedStreams.map((video: Video) => ({
              'url': video.url,
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
      return Date.now() < cacheUpdateTime + 3600000

    return false
  }

  static #parseId(url: URL): ID | undefined {
    let delimeter = this.#isPlaylist(url) ? '=' : '/'

    return url.split(delimeter).pop()
  }

  static #isPlaylist(url: URL): boolean {
    return url.includes('playlist')
  }
}
