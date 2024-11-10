import { writable } from 'svelte/store';

export const channels = writable<string[]>(
  JSON.parse(localStorage.channels || '[]')
)

channels.subscribe(c => localStorage.setItem('channels', JSON.stringify(c)))
