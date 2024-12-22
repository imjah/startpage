import { get } from 'svelte/store'
import { config } from '../share/config'

export class Piped {
  static FILTER_ALL       = 'all'
  static FILTER_VIDEOS    = 'videos'
  static FILTER_CHANNELS  = 'channels'
  static FILTER_PLAYLISTS = 'playlists'

  static get(endpoint: string, reload = false) {
    const {instance: {value: baseUrl}, timeoutInSeconds} = get(config)

    return fetch(baseUrl + endpoint, {
      cache: reload ? 'reload' : 'default',
      signal: AbortSignal.timeout(timeoutInSeconds * 1000)
    })
  }

  static getChannel(id: string) {
    return this.get(`/channel/${id}`)
  }

  static getPlaylist(id: string) {
    return this.get(`/playlists/${id}`)
  }

  static search(query: string, filter = this.FILTER_ALL) {
    return this.get(`/search?q=${query}&filter=${filter}`)
  }
}
