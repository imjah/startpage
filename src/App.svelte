<script lang="ts">
  import BookmarkAdd from './lib/BookmarkAdd.svelte';
  import Bookmarks from './lib/Bookmarks.svelte';
  import BookmarksStore from './store/bookmarks'
  import ChannelAdd from './lib/ChannelAdd.svelte';
  import Channels from './lib/Channels.svelte';
  import ChannelsFilter from './lib/ChannelsFilter.svelte';
  import ChannelsStore from './store/channels'
  import NavigationDropdown from './lib/NavigationDropdown.svelte';
  import Settings from './lib/Settings.svelte';
  import strings from './strings'
  import { type ID } from './store/channels.ts'
    import NavigationPopup from './lib/NavigationPopup.svelte';

  BookmarksStore.subscribeToLocalStorage()
  ChannelsStore.subscribeToLocalStorage()
  ChannelsStore.refetch()

  let id: ID = $state('')
</script>

<main>
  <nav>
    <ChannelsFilter bind:current={id} />
    <section class="nav">
      <NavigationDropdown value={strings.addChannel}>
        <ChannelAdd />
      </NavigationDropdown>
      <NavigationDropdown value={strings.addBookmark}>
        <BookmarkAdd />
      </NavigationDropdown>
      <NavigationPopup value={strings.settings}>
        <Settings />
      </NavigationPopup>
    </section>
  </nav>
  <section class="main">
    <Channels bind:current={id} width="33%" />
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

  nav > * {
    gap: .5rem;
  }

  section.nav {
    display: flex;
  }
</style>
