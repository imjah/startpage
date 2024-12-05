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
  instance: 'https://api.piped.yt',
  cacheLifetime: 3600000,
  ...Config.save
})
