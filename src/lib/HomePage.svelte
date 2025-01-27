<script lang="ts">
  import strings from '../share/strings'
  import BookmarksView from './BookmarksView.svelte';
  import ChannelsView from './ChannelsView.svelte';

  let tabs = [
    strings.channels,
    strings.bookmarks
  ]

  let focused = $state(0)
</script>

<main class="home-page">
  <div class="home-page__content">
    <div class="home-page__content-item" class:show={focused == 0}>
      <ChannelsView />
    </div>
    <div class="home-page__content-item" class:show={focused == 1}>
      <BookmarksView />
    </div>
  </div>

  <nav class="home-page__navigation">
    {#each tabs as tab, i}
      <input
        class="home-page__navigation-button"
        class:focus={focused == i}
        type="button"
        value={tab}
        onclick={() => focused = i}>
    {/each}
  </nav>
</main>

<style lang="scss">
  @use 'scss/breakpoints' as *;

  .home-page {
    display: grid;
    grid-template-rows: 1fr auto;
    overflow-y: scroll;
  }

  .home-page__content {
    overflow-y: inherit;
  }

  .home-page__content-item {
    display: none;
  }

  .home-page__content-item.show {
    display: initial;
  }

  .home-page__navigation {
    display: grid;
    grid-auto-flow: column;
    gap: var(--gap-0);
    padding: var(--gap-0);
    color: var(--color-surface-fg);
    background: var(--color-surface);
  }

  .home-page__navigation-button {
    padding: var(--gap-2);
    font-weight: bold;
    color: inherit;
    background: inherit;
    border: none;
  }

  .home-page__navigation-button:hover,
  .home-page__navigation-button:focus {
    background: var(--color-surface-light);
    outline: none;
    cursor: pointer;
  }

  .home-page__navigation-button.focus {
    color: var(--color-accent);
  }

  @include breakpoint-md {
    .home-page__content {
      display: grid;
      grid-template-rows: none;
      grid-template-columns: 2fr 1fr;
    }

    .home-page__content-item {
      display: initial;
      overflow-y: inherit;
    }

    .home-page__navigation {
      display: none;
    }
  }

  @include breakpoint-lg {
    .home-page__content {
      grid-template-columns: 1fr 2fr;
    }
  }
</style>
