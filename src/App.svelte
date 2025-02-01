<script lang="ts">
  import navaid from 'navaid'
  import config from './config'
  import strings from './share/strings'
  import bookmarks from './share/bookmarks'
  import { app } from './lib/state/app.svelte'
  import { routes, type Route } from './routes'
  import { Channels } from './share/channels'
  import { Config } from './share/config'
  import { Status } from './share/status'
  import Navigation from './lib/Navigation.svelte'
  import FetchProgress from './lib/FetchProgress.svelte'
  import Empty from './lib/Empty.svelte';

  let main: Route | undefined = $state()
  let router = navaid(config.base, () => main = undefined)

  for (let [_, route] of Object.entries(routes))
    router.on(route.path, () => main = route)

  router.listen()

  $effect(() => {
    router.route(app.route.path)
  })

  Status.saveOnUpdate()
  Config.saveOnUpdate()
  Channels.saveOnUpdate()
  bookmarks.subscribeToLocalStorage()
</script>

<div class="app">
  <FetchProgress />
  <Navigation />

  {#if main}
    <main.view {...main.args} />
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
