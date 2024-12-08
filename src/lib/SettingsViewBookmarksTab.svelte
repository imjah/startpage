<script lang="ts">
  import bookmarks from '../share/bookmarks'
  import strings from '../share/strings'
  import ButtonRemove from './ButtonRemove.svelte';

  let { store } = bookmarks
</script>

<div class="container">
  {#if $store.size}
    <ul class="settings">
      {#each $store as [url, {tag, name}]}
        <li class="setting">
          <p class="setting-text">{tag}: {name}</p>
          <ButtonRemove remove={() => bookmarks.delete(url)} />
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
    align-items: center;
    justify-content: space-between;
    padding-right: .5rem;
  }

  .setting:hover {
    background-color: var(--color-bg);
  }

  .setting-text {
    padding: 1rem;
    user-select: none;
  }
</style>
