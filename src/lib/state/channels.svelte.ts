import { get } from 'svelte/store';
import { LocalStorage } from '../../util/storage'
import { Piped } from '../../util/piped'
import { config } from '../../share/config'
import { status } from '../../share/status'

export class Channels extends LocalStorage {
  static LS_NAME = 'channels'

  static update(id: string, values: any) {
    channels.set(id, { ...(channels.get(id) || {}), ...values })
  }

  static #isFeedFresh() {
    return Date.now() < (get(status).feed.fetchedAt + get(config).cacheLifetimeInMinutes * 60000)
  }

  static #setFeedFetchTime() {
    status.update(s => { s.feed.fetchedAt = Date.now(); return s })
  }

  static toArray(selected: [ID, Channel] | Map<ID, Channel>) {
    return this.#toArray(
      selected instanceof Map ? [...selected.entries()] : [selected]
    )
  }

  static #toArray(selected: Array<[ID, Channel]>): ChannelVideo[] {
    return selected.flatMap(([id, channel]) => channel.videos.map(video => ({
      ...video,
      channelId: id,
      channelName : channel.name,
      channelNameDefault : channel.nameDefault
    })))
  }

  static BY_UPLOADED = (a: Video, b: Video) => b.uploaded - a.uploaded
}

export let channels = $state(new Map(Channels.get()))

$effect(() => {
  Channels.set([...channels])
})

type ID = string

export interface Channel {
  name: string;
  nameDefault: string;
  followVideos: boolean;
  videos: Video[];
  playlists: Playlist[];
}

export interface Video {
  url: string;
  title: string;
  uploaded: number;
  uploadedDate: string;
}

export interface Playlist {
  id: string;
  name: string;
  nameDefault: string;
  follow: boolean;
  videos: Video[];
}

export interface ChannelVideo extends Video {
  channelId: string;
  channelName: string;
  channelNameDefault: string;
}
