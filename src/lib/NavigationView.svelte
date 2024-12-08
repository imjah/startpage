<script lang="ts">
  import strings from '../share/strings'
  import BookmarksViewAdd from './BookmarksViewAdd.svelte';
  import ButtonFilter from './ButtonFilter.svelte';
  import ChannelsViewAdd from './ChannelsViewAdd.svelte';
  import Dropdown from './Dropdown.svelte';
  import Popup from './Popup.svelte';
  import SettingsView from './SettingsView.svelte';

  let { id = $bindable() } = $props()
</script>

<nav>
  <ButtonFilter bind:id />
  <section>
    <Dropdown value={strings.addChannel}>
      <ChannelsViewAdd />
    </Dropdown>
    <Dropdown value={strings.addBookmark}>
      <BookmarksViewAdd />
    </Dropdown>
    <Popup value={strings.settings}>
      <SettingsView />
    </Popup>
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
    gap: .5rem;
  }
</style>
