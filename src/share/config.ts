import { merge } from 'lodash'
import { writable } from 'svelte/store'
import { LocalStorage } from '../util/storage'

export class Config extends LocalStorage{
  static LS_NAME = 'config'

  static saveOnUpdate() {
    config.subscribe(s => super.set(s))
  }

  static getUsedKeybind(keybind: Keybind) {
    return keybind.user || keybind.default
  }
}

export const config = writable(merge({
  keybind: {
    close: 'Escape',
    focusSearch: { user: '', default: 's' }
  },
  instance:
    { label: 'kavin.rocks', value: 'https://pipedapi.kavin.rocks' },
  instances: [
    { label: 'kavin.rocks', value: 'https://pipedapi.kavin.rocks' },
    { label: 'piped.yt',    value: 'https://api.piped.yt' }
  ],
  feedLimit: 100,
  timeoutInSeconds: 5,
  cacheLifetimeInMinutes: 10
}, Config.get()))

interface Keybind {
  user: string;
  default: string;
}
