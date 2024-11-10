import { writable } from 'svelte/store'

export const videos = writable<Video[]>(
  JSON.parse(localStorage.videos || '[]')
)

videos.subscribe(c => localStorage.setItem('videos', JSON.stringify(c)))

export interface Video {
  url: string;
  title: string;
  uploaded: number;
  uploaderUrl: string;
  uploaderName: string;
  uploadedDate: string;
}
