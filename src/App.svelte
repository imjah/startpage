<script lang="ts">
  import strings from './strings'
  import BookmarksStore from './store/bookmarks'
  import ChannelsStore from './store/channels'
  import Bookmarks from './lib/Bookmarks.svelte';
  import BookmarksControl from './lib/BookmarksControl.svelte';
  import Dropdown from './lib/Dropdown.svelte';
  import Videos from './lib/Videos.svelte';
  import VideosControl from './lib/VideosControl.svelte';
  import VideosFilter from './lib/VideosFilter.svelte';
  import { type ID } from './store/channels.ts'

  BookmarksStore.subscribeToLocalStorage()
  ChannelsStore.subscribeToLocalStorage()
  ChannelsStore.refetch()

  let id: ID = $state('')
</script>

<main>
  <nav>
    <VideosFilter bind:current={id} />
    <section class="nav">
      <Dropdown value={strings.addChannel}>
        <VideosControl />
      </Dropdown>
      <Dropdown value={strings.addBookmark}>
        <BookmarksControl />
      </Dropdown>
    </section>
  </nav>
  <section class="main">
    <Videos bind:current={id} width="33%" />
    <Bookmarks width="67%" />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  section.main {
    display: flex;
    flex-grow: 1;
    overflow-y: hidden;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin: .25rem;
  }

  section.nav {
    display: flex;
  }
</style>
