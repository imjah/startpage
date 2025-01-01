<script lang="ts">
  import routes from '../share/routes'
  import strings from '../share/strings'
  import BookmarksViewAdd from './BookmarksViewAdd.svelte';
  import ChannelsFilterButton from './ButtonFilter.svelte';
  import ChannelsSyncButton from './ChannelsSyncButton.svelte';
  import ChannelsViewAdd from './ChannelsViewAdd.svelte';
  import Closeable from './Closeable.svelte';
  import Dropdown from './Dropdown.svelte';
  import Search from './Search.svelte';
  import IconMenu from './icons/Menu.svelte';
  import { preventDefault } from '../util/wrappers';

  let {
    route,
    router,
    id = $bindable(),
    controls = true
  } = $props()

  let expand = $state(false)

  let toggle = () =>
    expand = !expand

  let close = () =>
    expand = false
</script>

{#snippet link(href: string, name: string)}
  <a {href} class="nav__link" class:active={route == href} onclick={preventDefault(() => { router.route(href); close() })}>
    {name}
  </a>
{/snippet}

<nav class="nav">
  <div class="nav__controls">
    {#if controls}
      <ChannelsFilterButton bind:id />
      <ChannelsSyncButton />
    {/if}
  </div>

  <!-- <Search /> -->

  <Closeable bind:open={expand}>
    <div class="nav__menu">
      <button class="nav__menu-toggler nav__item nav__item--icon" class:expand onclick={toggle} aria-label={strings.menu}>
        <IconMenu />
      </button>

      <ul class="nav__menu-list" class:expand>
        <li>
          <Dropdown value={strings.addChannel}>
            <ChannelsViewAdd />
          </Dropdown>
        </li>

        <li>
          <Dropdown value={strings.addBookmark}>
            <BookmarksViewAdd />
          </Dropdown>
        </li>

        <li>
          {@render link(routes.settings, strings.settings)}
        </li>
      </ul>
    </div>
  </Closeable>
</nav>

<style lang="scss">
  @use 'scss/variables' as *;
  @use 'scss/breakpoints' as *;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: $gap-0;
    font-size: 1rem;
    font-weight: $font-bold;
    color: var(--color-accent);
    background: var(--color-bg);
  }

  .nav__controls {
    display: flex;
  }

  .nav__menu {
    position: relative;
  }

  .nav__menu-toggler.expand {
    background: var(--color-surface);
  }

  .nav__menu-list {
    position: absolute;
    top: 100%;
    right: 0;
    display: none;
    background: var(--color-surface);

    &.expand {
      display: initial;
    }
  }

  .nav__link {
    display: block;
    padding: $gap-2;
    text-decoration: none;

    &:focus,
    &:hover {
      background: var(--color-surface-light);
      cursor: pointer;
    }

    &.active {
      color: var(--color-accent-fg);
      background: var(--color-accent);

      &:focus,
      &:hover {
        background: var(--color-accent-light);
      }
    }
  }

  @include breakpoint-md {
    .nav__menu-toggler {
      display: none;
    }

    .nav__menu-list {
      position: unset;
      display: flex;
      gap: $gap-0;
      background: inherit;

      &.expand {
        display: flex;
      }
    }

    .nav__link:focus,
    .nav__link:hover {
      background: var(--color-bg-light);
    }
  }
</style>
