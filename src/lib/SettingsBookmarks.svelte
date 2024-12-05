<script lang="ts">
  import strings from '../strings'
  import Bookmarks from '../store/bookmarks'
  import SettingsRemoveButton from './SettingsRemoveButton.svelte';

  let { store } = Bookmarks
</script>

<div class="container">
  {#if $store.size}
    <ul class="settings">
      {#each $store as [url, {tag, name}]}
        <li class="setting">
          <p>{tag}: {name}</p>
          <SettingsRemoveButton remove={() => Bookmarks.delete(url)} />
        </li>
      {/each}
    </ul>
  {:else}
    <p class="no-channels">{strings.noChannelsFound}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1rem;
    overflow-y: scroll;
  }

  .container:has(.no-channels) {
    align-items: center;
    justify-content: center;
  }

  .no-channels {
    color: var(--color-fg-inactive);
    user-select: none;
  }

  .settings {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .setting {
    display: flex;
    justify-content: space-between;
    margin-bottom: .25rem;
  }
</style>
