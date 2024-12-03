<script lang="ts">
  import BookmarkAdd from './BookmarkAdd.svelte';
  import ChannelAdd from './ChannelAdd.svelte';
  import ChannelsFilter from './ChannelsFilter.svelte';
  import NavigationDropdown from './NavigationDropdown.svelte';
  import NavigationPopup from './NavigationPopup.svelte';
  import Settings from './Settings.svelte';
  import strings from '../strings'

  let { id = $bindable() } = $props()
</script>

<nav>
  <ChannelsFilter bind:id />
  <section>
    <NavigationDropdown value={strings.addChannel}>
      <ChannelAdd />
    </NavigationDropdown>
    <NavigationDropdown value={strings.addBookmark}>
      <BookmarkAdd />
    </NavigationDropdown>
    <NavigationPopup value={strings.settings} open={true}>
      <Settings />
    </NavigationPopup>
  </section>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    margin: .25rem;
  }

  section {
    display: flex;
  }
</style>
