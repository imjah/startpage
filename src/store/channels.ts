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
  static store = writable<Map<ID, Channel>>(
    new Map(
      JSON.parse(localStorage.channels || '[]')
    )
  )

  static set(id: ID) {
    this.#fetch(id)
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
      localStorage.channels = JSON.stringify(v, (_, value) => 
        value instanceof Map ? [...value] : value
      )
    )
  }

  // static async refetch(cache: boolean = true) {
    
  // }

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
}

// function fetchVideos(channel: string) {

    // localStorage.videosFetchedAt = Date.now()
// }

// function fetchVideosUsingCache(channel: string) {
//   if (Date.now() < localStorage.videosFetchedAt + $config.cacheLifetime)
//     return 0

//   videos.set([])

//   fetchVideos(channel)
// }
