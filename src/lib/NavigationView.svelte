<script lang="ts">
  import routes from '../share/routes'
  import strings from '../share/strings'
  import BookmarksViewAdd from './BookmarksViewAdd.svelte';
  import ButtonFilter from './ButtonFilter.svelte';
  import ChannelsViewAdd from './ChannelsViewAdd.svelte';
  import Dropdown from './Dropdown.svelte';
  import InputButton from './InputButton.svelte';

  let {
    id = $bindable(),
    route
  } = $props()
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

    <InputButton
      value={strings.settings}
      onclick={() => route(routes.settings)} />
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
