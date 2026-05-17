<script lang="ts">
  import strings from '../share/strings'
  import Bookmarks, { bookmarks, type Bookmark } from '../share/bookmarks'
  import ButtonRemove from './ButtonRemove.svelte';

  type BookmarkItem = {
    url: string
    bookmark: Bookmark
    isRemoved: boolean
  }

  let removed = $state(new Map<string, Bookmark>())

  let items: BookmarkItem[] = $derived(
    [
      ...[...$bookmarks].map(([url, bookmark]) => ({ url, bookmark, isRemoved: false })),
      ...[...removed].map(([url, bookmark]) => ({ url, bookmark, isRemoved: true }))
    ].sort((a, b) => a.bookmark.name.localeCompare(b.bookmark.name))
  )
</script>

<div class="bookmarks">
  {#if items.length}
    <ul class="bookmarks__list">
      {#each items as item (item.url)}
        <li class="bookmarks__list-item">
          <input
            class="bookmarks__input"
            value={`${item.bookmark.tag}: ${item.bookmark.name}`}
            disabled
          >
          <ButtonRemove
            isRemoved={item.isRemoved}
            remove={() => {
              removed.set(item.url, item.bookmark)
              Bookmarks.delete(item.url)
            }}
            restore={() => {
              removed.delete(item.url)
              Bookmarks.set(item.bookmark)
            }}
          />
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
