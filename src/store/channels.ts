import { writable } from 'svelte/store';

export interface Channel {
  id: string;
  name: string;
}

export const channels = writable<Channel[]>(
  JSON.parse(localStorage.channels || '[]')
)

channels.subscribe(c => localStorage.setItem('channels', JSON.stringify(c)))

export const create = (channel: Channel) => {
  channels.update(store => {
    store.push(channel)
    return store
  })
}

export const remove = (channel: Channel) => {
  channels.update(store => {
    store.splice(store.findIndex(v => v.id === channel.id))

    return store
  })
}
