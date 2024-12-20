import { writable } from 'svelte/store'
import { LocalStorage } from '../util/storage'

export class State extends LocalStorage {
  static LS_NAME = 'state'

  static saveOnUpdate() {
    state.subscribe(s => super.set(s))
  }
}

export const state = writable({
  feed: {
    fetchedAt: 0
  }
})
