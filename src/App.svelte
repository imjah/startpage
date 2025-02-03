<script lang="ts">
  import navaid from 'navaid'
  import config from './config'
  import bookmarks from './share/bookmarks'
  import { app } from './lib/state/app.svelte'
  import { routes } from './routes'
  import { Channels } from './share/channels'
  import { Config } from './share/config'
  import { Status } from './share/status'
  import Navigation from './lib/Navigation.svelte'
  import FetchProgress from './lib/FetchProgress.svelte'

  let main = $state(routes.home)
  let router = navaid(config.base, () => main = routes.notFound)

  for (let [_, route] of Object.entries(routes))
    router.on(route.path, () => main = route)

  router.listen()

  $effect(() => {
    router.route(app.route.path)
  })

  let title = $derived(
    main.name ? `${config.name} - ${main.name}` : config.name
  )

  Status.saveOnUpdate()
  Config.saveOnUpdate()
  Channels.saveOnUpdate()
  bookmarks.subscribeToLocalStorage()
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="app">
  <FetchProgress />
  <Navigation />
  <main.view {...main.args} />
</div>

<style>
  .app {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
</style>
