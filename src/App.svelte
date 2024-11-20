<script lang="ts">
  import strings from './strings.ts'
  import Channels from './store/channels.ts'
  import Bookmarks from './lib/Bookmarks.svelte';
  import BookmarksControl from './lib/BookmarksControl.svelte';
  import Dropdown from './lib/Dropdown.svelte';
  import Videos from './lib/Videos.svelte';
  import VideosControl from './lib/VideosControl.svelte';

  Channels.subscribeToLocalStorage()
  Channels.refetch()
</script>

<main>
  <nav>
    <Dropdown value="{strings.addChannel}">
      <VideosControl />
    </Dropdown>
    <Dropdown value="{strings.addBookmark}">
      <BookmarksControl />
    </Dropdown>
  </nav>
  <section>
    <Videos width="33%" />
    <Bookmarks width="67%" />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  nav {
    display: flex;
    justify-content: right;
  }

  section {
    display: flex;
    flex-grow: 1;
    overflow-y: hidden;
  }
</style>
