import type { Component } from 'svelte';
import strings from './share/strings'
import HomePage from './lib/HomePage.svelte'
import SettingsPage from './lib/SettingsPage.svelte'

export const routes: Routes =  {
  home: {
    path: strings.paths.home,
    view: HomePage,
    args: {}
  },
  settings: {
    path: strings.paths.settings,
    view: SettingsPage,
    args: {}
  }
}

export interface Route {
  path: string;
  view: Component;
  args: any;
}

export interface Routes {
  [key: string]: Route
}
