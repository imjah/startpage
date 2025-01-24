import { writable, get } from 'svelte/store';
import { Piped } from '../util/piped'
import { LocalStorage } from '../util/storage'
import { config } from './config'
import { status } from './status'

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

  static async add(url: string | URL, partial = false, reload = false): Promise<void> {
    let id = this.#parseId(url)

    if (id === undefined)
      return new Promise((_, reject) => reject(`No URL found in ${url}`))

    return (
        this.#isPlaylist(url)
      ? this.#fetchPlaylist(id, reload)
      : this.#fetchChannel(id, reload)
    ).then(channel => {
        if (partial)
          this.update(url, {videos: channel.videos})
        else
          channels.update(s => s.set(url, channel))

        status.update(s => {
          s.feed.fetching.now = s.feed.fetching.now.filter(
            (u: URL) => u != url
          )

          if (s.feed.fetching.now.length == 0)
            s.feed.fetching.max = 0

          return s
        })
      }
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
      channelUrl: channel.url,
      channelName : channel.name,
      channelDisplayName : channel.displayName
    })))
  }

  static BY_UPLOADED = (a: Video, b: Video) =>
    b.uploaded - a.uploaded

  static BY_NAME = ([, a]: [URL, Channel], [, b]: [URL, Channel]) =>
    (a.displayName || a.name).localeCompare(b.displayName || b.name)

  static async refetch({reload = false} = {}) {
    const r = reload || !this.#isFeedFresh()

    channels.update(v => {
      status.update(s => {
        s.feed.fetching.now = [...v].map(c => c[0])
        s.feed.fetching.max = v.size
        return s
      })

      v.forEach((_, id) => 
        this.add(id, true, r)
        .catch(_ => status.update(s => {
          s.feed.fetching.now = []
          s.feed.fetching.max = 0
          return s
        })))

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

  static async #fetchChannel(id: URL, reload: boolean): Promise<Channel> {
    return fetch(`${get(config).instance.value}/channels/tabs?data={"id":"${id}","contentFilters":["videos"]}`, {cache: reload ? 'reload' : 'default'})
          .then(response => response.json())
          .then(response => ({
            'url': `https://youtube.com/channel/${id}`,
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

  static async #fetchPlaylist(id: URL, reload: boolean): Promise<Channel> {
    return fetch(`${get(config).instance.value}/playlists/${id}`, {cache: reload ? 'reload' : 'default'})
          .then(response => response.json())
          .then(response => ({
            'url': `https://youtube.com/playlist?list=${id}`,
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
