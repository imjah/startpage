<script lang="ts">
  import { onMount } from 'svelte';
  import bookmarks from './share/bookmarks'
  import channels from './share/channels'
  import { type ID } from './share/channels'
  import { Config } from './share/config'
  import BookmarksView from './lib/BookmarksView.svelte';
  import ChannelsView from './lib/ChannelsView.svelte';
  import NavigationView from './lib/NavigationView.svelte'

  let id: ID = $state('')

  onMount(() => {
    Config.saveOnChange()
    bookmarks.subscribeToLocalStorage()
    channels.subscribeToLocalStorage()
    channels.refetch()
  })
</script>

<main>
  <NavigationView bind:id />
  <section>
    <ChannelsView width="33%" bind:id />
    <BookmarksView width="67%" />
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
