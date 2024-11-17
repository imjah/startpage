import { writable } from 'svelte/store';

export const channels = writable<Map<string, string>>(
  new Map(JSON.parse(localStorage.channels || '[]'))
)

export const setChannel = (id: string, name: string) => {
  channels.update(c => {
    c.set(id, name)
    return c
  })
}

export const deleteChannel = (id: string) => {
  channels.update(c => {
    c.delete(id)
    return c
  })
}

channels.subscribe(c => localStorage.channels = JSON.stringify(c, (key, value) => (value instanceof Map ? [...value] : value)))
