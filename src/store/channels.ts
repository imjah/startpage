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
    this.store.update(v => {
      v.set(id, this.#fetch(id))
      return v
    })
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

  static #fetch(id: ID): Channel {
    // let name = ''
    // let videos: Video[] = []

    // fetch(`https://api.piped.yt/channel/${id}`)
    // .then(response => response.json())
    // .then(response => response.relatedStreams.forEach((video: Video) => {

    // }))
    // .catch(error => console.log(error))

    return {
      'name': 'test/name',
      'videos': [
        {
          'url': 'test/url',
          'title': 'test/title',
          'uploaderUrl': 'test/uploaderUrl',
          'uploaderName': 'test/uploaderName',
          'uploaded': 0,
          'uploadedDate': 'test/uploadedDate'
        },
      ]
    }
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
