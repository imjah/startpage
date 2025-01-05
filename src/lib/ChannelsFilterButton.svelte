<script lang="ts">
  import routes from '../share/routes'
  import strings from '../share/strings'
  import { Channels, channels } from '../share/channels'
  import { preventDefault } from '../util/wrappers';
  import Closeable from './Closeable.svelte';

  let {
    filter = $bindable()
  } = $props()
  
  let isDropdownOpen       = $state(false)
  let filtered             = $derived($channels.get(filter))
  let filteredName         = $derived(filtered?.displayName || filtered?.name)
  let channelsSortedByName = $derived([...$channels].sort(Channels.BY_NAME))

  let toggleDropdown = () =>
    isDropdownOpen = !isDropdownOpen
</script>

<Closeable bind:open={isDropdownOpen}>
  <div class="filter">
    <input
      class="filter__toggler nav__item"
      class:focus={isDropdownOpen}
      type="button"
      value={filteredName || strings.all}
      onclick={toggleDropdown}
    >

    {#if isDropdownOpen}
      <ul class="filter__list" tabindex="-1">
        {#if filter}
          {@render item(strings.allKebabCase, strings.all)}
        {/if}

        {#each channelsSortedByName as [id, {name, displayName}]}
          {#if id != filter}
            {@render item(id, displayName || name)}
          {/if}
        {/each}
      </ul>
    {/if}
  </div>
</Closeable>

{#snippet item(id: string, text: string)}
  <li>
  	<a
  	  class="filter__list-item nav__item"
  	  href={routes.home + '?filter=' + id}
  	  onclick={preventDefault(() => { filter = id; toggleDropdown() })}
  	>{text}</a>
  </li>
{/snippet}

<style lang="scss">
  @use 'scss/variables' as *;

  .filter {
    position: relative;

    &__toggler {
      &.focus {
        background: var(--color-surface);
        
        &:hover,
        &:focus {
          background: var(--color-surface-light);
        }
      }
    }

    &__list {
      position: absolute;
      min-width: 100%;
      max-width: min(calc(100vw - 100% - $nav-gap), 20rem);
      max-height: min(calc(100vh - 100% - $nav-gap), 1000%);
      overflow-y: scroll;

      &-item {
        display: block;
        color: var(--color-surface-fg);
        background: var(--color-surface);
        text-decoration: none;
        text-wrap: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        
        &:hover,
        &:focus {
          background: var(--color-surface-light);
        }
      }
    }
  }
</style>
