import { writable } from 'svelte/store';

interface Config {
  instance: string;
  cacheLifetime: number;
}

const init:Config = {
  'instance': 'https://api.piped.yt',
  'cacheLifetime': 3600000
}

export const config = writable<Config>(
  Object.assign(
    init,
    JSON.parse(localStorage.config || '{}')
  )
)

config.subscribe(c => localStorage.setItem('config', JSON.stringify(c)))
