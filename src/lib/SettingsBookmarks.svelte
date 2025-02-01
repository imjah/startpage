<script lang="ts">
  import strings from '../share/strings'
  import bookmarks from '../share/bookmarks'
  import ButtonRemove from './ButtonRemove.svelte';

  let { store } = bookmarks
</script>

<div class="bookmarks">
  {#if $store.size}
    <ul class="bookmarks__list">
      {#each $store as [url, {tag, name}]}
        <li class="bookmarks__list-item">
          <input
            class="bookmarks__input"
            value={`${tag}: ${name}`}
            disabled
          >
          <ButtonRemove remove={() => bookmarks.delete(url)} />
        </li>
      {/each}
    </ul>
  {:else}
    <p class="bookmarks__empty">{strings.noBookmarksFound}</p>
  {/if}
</div>

<style lang="scss">
  .bookmarks {
    display: grid;
    overflow-y: scroll;
    user-select: none;

    &__list {
      overflow-y: scroll;

      &-item {
        display: grid;
        grid-template-columns: 1fr auto;

        &:hover {
          background-color: var(--color-surface-light);
        }
      }
    }

    &__input {
      padding: 1rem;
      color: inherit;
      background: inherit;
      border: none;
      outline: none;
    }

    &__empty {
      align-self: center;
      justify-self: center;
      color: var(--color-fg-inactive);
    }
  }
</style>
