<script lang="ts">
  import strings from '../share/strings'
  import SettingsViewBookmarksTab from './SettingsViewBookmarksTab.svelte';
  import SettingsViewChannelsTab from './SettingsViewChannelsTab.svelte';
  import SettingsViewGeneralTab from './SettingsViewGeneralTab.svelte';

  let tabs = [
    strings.general,
    strings.channels,
    strings.bookmarks
  ]

  let tab = $state(0)
</script>

<div class="container">
  <ul class="tabs">
    {#each tabs as name, index}
      <li class="tab">
        <input
          type="button"
          class="tab-button"
          class:focus={tab == index}
          value={name}
          onclick={() => tab = index}>
      </li>
    {/each}
  </ul>

  <div class="content">
    {#if      tab == 0}
      <SettingsViewGeneralTab />
    {:else if tab == 1}
      <SettingsViewChannelsTab />
    {:else if tab == 2}
      <SettingsViewBookmarksTab />
    {/if}
  </div>
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
    color: inherit;
    background-color: inherit;
    border: none;
  }

  .tab-button:hover,
  .tab-button:focus {
    background-color: var(--color-surface-light);
    cursor: pointer;
    outline: none;
  }

  .tab-button.focus {
    color: var(--color-accent-fg);
    background-color: var(--color-accent);
    cursor: default;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: scroll;
  }
</style>
