<script lang="ts">
  import { onMount } from 'svelte';
  import navaid from 'navaid';
  import config from './config'
  import bookmarks from './share/bookmarks'
  import routes from './share/routes'
  import strings from './share/strings';
  import { Channels } from './share/channels'
  import { Config } from './share/config'
  import { Status } from './share/status'
  import Empty from './lib/Empty.svelte';
  import HomePage from './lib/HomePage.svelte';
  import Navigation from './lib/NavigationView.svelte'
  import SettingsPage from './lib/SettingsPage.svelte';
  import FetchProgressBar from './lib/FetchProgressBar.svelte'
  import { redirectIfGithubPages404PageSetRedirectPath } from './util/github'

  let filter = $state('')
  let route  = $state(routes.home)
  let router = navaid(config.base, () => route = routes.notFound)

  router
  .on(routes.home,     () => route = routes.home)
  .on(routes.settings, () => route = routes.settings)

  redirectIfGithubPages404PageSetRedirectPath(router.route)

  onMount(() => {
    router.listen()
    Status.saveOnUpdate()
    Config.saveOnUpdate()
    Channels.saveOnUpdate()
    bookmarks.subscribeToLocalStorage()
  })
</script>

<div class="app">
  <FetchProgressBar />
  <Navigation {route} {router} bind:filter controls={route == routes.home} />

  {#if route == routes.home}
  	<HomePage bind:filter />
  {:else
    if route == routes.settings}
  	<SettingsPage back={() => router.route(routes.home)} />
  {:else}
    <Empty message={strings.notFound} />
  {/if}
</div>

<style>
  .app {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
</style>
