<script lang="ts">
  import strings from '../strings'
  import SettingsBookmarks from './SettingsBookmarks.svelte';
  import SettingsChannels from './SettingsChannels.svelte';
  import SettingsGeneral from './SettingsGeneral.svelte';

  let { open = 0 } = $props()

  let tabs = [
    strings.general,
    strings.channels,
    strings.bookmarks
  ]

  let index = $state(open)
</script>

<div class="container">
  <ul class="tabs">
    {#each tabs as tab, i}
      <li class="tab">
        <button class="tab-button" class:focus={index == i} onclick={() => index = i}>
          {tab}
        </button>
      </li>
    {/each}
  </ul>
  {#if index == 0}
    <SettingsGeneral />
  {/if}
  {#if index == 1}
    <SettingsChannels />
  {/if}
  {#if index == 2}
    <SettingsBookmarks />
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .tabs {
    display: flex;
  }

  .tab {
    display: grid;
    flex-grow: 1;
  }

  .tab-button {
    padding: 1rem;
    cursor: pointer;
    color: inherit;
    background-color: inherit;
    border: none;
    outline: none;
  }

  .tab-button.focus,
  .tab-button:focus {
    color: var(--color-fg);
    background-color: var(--color-accent);
    cursor: default;
  }

  .tab-button:not(.focus):hover {
    background-color: var(--color-bg);
  }
</style>
