<script lang="ts">
  import strings from '../share/strings'
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

<div class="settings">
  <ul class="settings__tabs">
    {#each tabs as name, index}
      <li class="settings__tabs-item">
        <input
          type="button"
          class="settings__tabs-button"
          class:focus={tab == index}
          value={name}
          onclick={() => tab = index}
          tabindex={tab == index ? -1 : 0}>
      </li>
    {/each}
  </ul>

  <div class="settings__list">
    {#if      tab == 0}
      <SettingsViewGeneralTab />
    {:else if tab == 1}
      <SettingsViewChannelsTab />
    {:else if tab == 2}
      <SettingsViewBookmarksTab />
    {/if}
  </div>

  <div class="settings__exit">
    <button class="settings__exit-button" onclick={back}>
      {strings.back}
    </button>
  </div>
</div>

<style lang="scss">
  @use 'scss/breakpoints' as *;
  @use 'scss/variables' as *;
  
  .settings {
    display: grid;
    grid-template-rows: auto 1fr auto;
    overflow-y: scroll;

    &__tabs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      &-item {
        display: grid;
      }

      &-button {
        padding: $gap-3;
        color: inherit;
        background-color: inherit;
        border: none;

        &:hover,
        &:focus {
          background-color: var(--color-surface-light);
          cursor: pointer;
          outline: none;
        }

        &.focus {
          color: var(--color-accent-fg);
          background-color: var(--color-accent);
          cursor: default;
        }
      }
    }

    &__list {
      display: grid;
      overflow-y: scroll;
    }

    &__exit {
      display: grid;
      padding: $gap-1;

      &-button {
        padding: $gap-1;
        text-align: center;
        color: var(--color-accent-fg);
        background: var(--color-accent);
        border: 0;
        cursor: pointer;

        &:focus {
          outline: $outline var(--color-accent-light);
        }
      }
    }
  }

  @include breakpoint-md {
    .settings {
      grid-template-rows: 1fr auto;
      grid-template-columns: 10rem 1fr;

      &__tabs {
        grid-row: 1 / span 2;
        grid-template-rows: repeat(3, auto) 1fr;
        grid-template-columns: auto;
        overflow-y: scroll;

        &-button {
          padding: 2 * $gap-3 + .51rem;
        }
      }

      &__exit {
        grid-column: 2;
        justify-items: right;

        &-button {
          width: 20rem;
        }
      }
    }
  }
</style>
