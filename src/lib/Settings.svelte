<script lang="ts">
  import strings from '../strings'
  import SettingsChannels from './SettingsChannels.svelte';

  let tabs = [
    strings.general,
    strings.channels,
    strings.bookmarks
  ]

  let index = $state(1)
</script>

<div>
  <ul class="tabs">
    {#each tabs as tab, i}
      <li class="tab">
        <button class="tab-button" class:focus={index == i} onclick={() => index = i}>
          {tab}
        </button>
      </li>
    {/each}
  </ul>
  {#if index == 1}
    <SettingsChannels />
  {/if}
</div>

<style>
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
  }

  .tab-button.focus,
  .tab-button:focus {
    color: var(--color-fg);
    background-color: var(--color-accent);
    outline: none;
    cursor: default;
  }
</style>
