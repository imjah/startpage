import { writable, get } from 'svelte/store'

export class Config {
  static name = 'config'

  static get get() {
    return get(config)
  }

  static get save() {
    try {
      return JSON.parse(localStorage[this.name] || '{}')
    }
    catch (e) {
      return {}
    }
  }

  static saveOnUpdate() {
    config.subscribe(c => localStorage[this.name] = JSON.stringify(c))
  }

  static getUsedKeybind(keybind: Keybind) {
    return keybind.user || keybind.default
  }
}

export const config = writable({
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
  timeoutInSeconds: 5,
  cacheLifetimeInMinutes: 10,
  ...Config.save
})

interface Keybind {
  user: string;
  default: string;
}
