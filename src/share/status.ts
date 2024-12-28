import { writable } from 'svelte/store'
import { LocalStorage } from '../util/storage'

export class Status extends LocalStorage {
  static LS_NAME = 'status'

  static saveOnUpdate() {
    status.subscribe(s => super.set(s))
  }
}

export const status = writable({
  feed: {
    fetching: {
      now: [],
      max: 0
    },
    fetchedAt: 0
  },
  ...Status.get()
})
