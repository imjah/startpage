<script lang="ts">
  import strings from '../strings'
  import Bookmarks from '../store/bookmarks'
  import { onDestroy } from 'svelte';
  import InputButton from './InputButton.svelte';

  let { store } = Bookmarks

  let save = () => $store.entries().forEach(
    ([id, {use}]) => (use === false) && Bookmarks.delete(id)
  )

  onDestroy(() => save())
</script>

<div class="container">
  {#if $store.size}
    <ul class="settings">
      {#each $store as [url, {tag, name, use}]}
        <li class="setting">
          <p>{tag}: {name}</p>
          <input
            type="button"
            class="setting-remove"
            value={use === false ? strings.restore : strings.remove}
            onclick={() => use === false ? Bookmarks.update(url, {use: true}) : Bookmarks.update(url, {use: false})}>
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
  }

  .setting-remove {
    color: var(--color-accent);
    background-color: var(--color-bg-light);
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
