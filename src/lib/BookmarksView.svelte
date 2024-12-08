<script lang="ts">
  import bookmarks from '../share/bookmarks'
  import strings from '../share/strings'

  let { width = '100%' } = $props()
  let { store } = bookmarks
</script>

<div class="container" style:flex-basis={width}>
{#if $store.size}
	{#each Map.groupBy($store.values(), ({tag}) => tag) as [tag, bookmarks]}
  <ul class="tag">
    <h3 class="tag-name">{tag}</h3>
    {#each bookmarks as {url, name}}
    <li class="tag-bookmark">
      <a class="" href={url}>{name}</a>
    </li>
    {/each}
  </ul>
  {/each}
{:else}
  <p class="no-bookmarks">{strings.noBookmarksFound}</p>
{/if}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 1rem;
    overflow-y: scroll;
  }

  .container:has(.no-bookmarks) {
    justify-content: center;
  }

  .no-bookmarks {
    color: var(--color-fg-inactive);
    user-select: none;
  }

  .tag {
    width: 20%;
    padding: .5rem;
  }

  .tag-name {
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tag-bookmark {
    margin-bottom: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
