import { writable } from 'svelte/store';

export type ID = string

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

  static async set(id: ID): Promise<void> {
    return this.#fetch(id)
    .then((channel: Channel) => this.store.update(v => {
      v.set(id, channel)
      return v
    }))
  }

  static delete(id: ID) {
    this.store.update(v => {
      v.delete(id)
      return v
    })
  }

  static subscribeToLocalStorage() {
    this.store.subscribe(v => 
      localStorage[this.LS_CACHE] = JSON.stringify(v, (_, value) => 
        value instanceof Map ? [...value] : value
      )
    )
  }

  static async refetch(cache: boolean = true) {
    if (cache && this.#isCacheUpToDate())
      return

    this.store.update(v => {
      v.forEach((_, id) => this.set(id))
      return v
    })

    this.#resetCacheUpdateTime()
  }

  static async #fetch(id: ID): Promise<Channel> {
    return fetch(`https://api.piped.yt/channel/${id}`)
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
    .catch(error => console.log(error))
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
}
