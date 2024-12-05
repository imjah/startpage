<script lang="ts">
  import { onMount } from 'svelte';
  import bookmarks from './store/bookmarks'
  import Bookmarks from './lib/Bookmarks.svelte';
  import channels from './store/channels'
  import Channels from './lib/Channels.svelte';
  import { Config } from './store/config'
  import Navigation from './lib/Navigation.svelte'
  import { type ID } from './store/channels.ts'

  let id: ID = $state('')

  onMount(() => {
    Config.saveOnChange()
    bookmarks.subscribeToLocalStorage()
    channels.subscribeToLocalStorage()
    channels.refetch()
  })
</script>

<main>
  <Navigation bind:id />
  <section>
    <Channels width="33%" bind:id />
    <Bookmarks width="67%" />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  section {
    display: flex;
    flex-grow: 1;
    overflow-y: hidden;
  }
</style>
