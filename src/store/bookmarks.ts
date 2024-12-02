import { writable } from 'svelte/store';

export type URL = string

export interface Bookmark {
  url: URL;
  tag: string;
  name: string;
}

export default class Bookmarks {
  static LS_CACHE = 'bookmarks'

  static store = writable<Map<URL, Bookmark>>(
    new Map(
      JSON.parse(localStorage[this.LS_CACHE] || '[]')
    )
  )

  static set(bookmark: Bookmark) {
    this.store.update(v => {
      v.set(bookmark.url, bookmark)
      return v
    })
  }

  static delete(url: URL) {
    this.store.update(v => {
      v.delete(url)
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
}