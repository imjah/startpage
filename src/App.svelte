<script lang="ts">
  import { onMount } from 'svelte';
  import navaid from 'navaid';
  import config from './config'
  import bookmarks from './share/bookmarks'
  import routes from './share/routes'
  import strings from './share/strings';
  import { Channels } from './share/channels'
  import { Config } from './share/config'
  import Empty from './lib/Empty.svelte';
  import HomePage from './lib/HomePage.svelte';
  import NavigationView from './lib/NavigationView.svelte'
  import SettingsPage from './lib/SettingsPage.svelte';
  import { redirectIfGithubPages404PageSetRedirectPath } from './util/github'

  let id     = $state('')
  let route  = $state(routes.home)
  let router = navaid(config.base, () => route = routes.notFound)

  router
  .on(routes.home,     () => route = routes.home)
  .on(routes.settings, () => route = routes.settings)

  redirectIfGithubPages404PageSetRedirectPath(router.route)

  onMount(() => {
    router.listen()
    Config.saveOnUpdate()
    Channels.saveOnUpdate()
    bookmarks.subscribeToLocalStorage()
  })
</script>

<div class="stack">
  <NavigationView route={router.route} bind:id />

  {#if      route == routes.home}
  	<HomePage />
  {:else if route == routes.settings}
  	<SettingsPage back={() => router.route(routes.home)} />
  {:else}
    <Empty message={strings.notFound} />
  {/if}
</div>

<style>
  .stack {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
