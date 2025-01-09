<script lang="ts">
  import strings from '../share/strings'
  import InputSubmit from './InputSubmit.svelte';
  import SettingsViewBookmarksTab from './SettingsViewBookmarksTab.svelte';
  import SettingsViewChannelsTab from './SettingsViewChannelsTab.svelte';
  import SettingsViewGeneralTab from './SettingsViewGeneralTab.svelte';

  let {
    back
  } = $props()

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
          onclick={() => tab = index}
          tabindex={tab == index ? -1 : 0}>
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

  <div class="back">
    <InputSubmit value={strings.back} onclick={back} />
  </div>
</div>

<style lang="scss">
  @use 'scss/breakpoints' as *;
  
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
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

  .back {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  @include breakpoint-sm {
    .back {
      justify-content: flex-end;
    }
  }
</style>
