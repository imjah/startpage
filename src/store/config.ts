import { writable, get } from 'svelte/store';

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

  static saveOnChange() {
    config.subscribe(c => localStorage[this.name] = JSON.stringify(c))
  }
}

export const config = writable({
  instance:
    { label: 'kavin.rocks', value: 'https://pipedapi.kavin.rocks' },
  instances: [
    { label: 'kavin.rocks', value: 'https://pipedapi.kavin.rocks' },
    { label: 'piped.yt',    value: 'https://api.piped.yt' }
  ],
  cacheLifetimeInMinutes: 10,
  ...Config.save
})
