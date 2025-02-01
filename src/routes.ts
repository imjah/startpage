import type { Component } from 'svelte';
import strings from './share/strings'
import Home from './lib/Home.svelte'
import Settings from './lib/Settings.svelte'

export const routes: Routes =  {
  home: {
    path: strings.paths.home,
    view: Home,
    args: {}
  },
  settings: {
    path: strings.paths.settings,
    view: Settings,
    args: { tabIndex: 0 }
  },
  channels: {
    path: strings.paths.channels,
    view: Settings,
    args: { tabIndex: 1 }
  },
  bookmarks: {
    path: strings.paths.bookmarks,
    view: Settings,
    args: { tabIndex: 2 }
  },
}

export interface Route {
  path: string;
  view: Component;
  args: any;
}

export interface Routes {
  [key: string]: Route
}
