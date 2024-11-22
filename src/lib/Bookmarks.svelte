<script lang="ts">
  import strings from '../strings'

  type Tag = string

  interface Bookmark {
    url: string;
    name: string;
  }

  let b = new Map<Tag, Bookmark[]>([
    // ['youtube', [
    //   {'url': '', 'name': 'pop science'},
    //   {'url': '', 'name': 'didaskalia'},
    //   {'url': '', 'name': 'lex friedman'}
    // ]],
    // ['twitch', [
    //   {'url': '', 'name': 'togglebit'},
    //   {'url': '', 'name': 'kapitanbomba'},
    // ]],
    // ['reddit', [
    //   {'url': '', 'name': 'starpages'},
    //   {'url': '', 'name': 'archlinux'}
    // ]]
  ])

  let { width = '100%', columns = 3 } = $props()
</script>

<div class="container" style:flex-basis={width}>
{#if b.size}
	{#each b as [tag, bookmarks]}
  <div class="tag" style:flex-basis={`${100 / columns}%`}>
    <ul>
      <h2 class="tag-name">{tag}</h2>
      {#each bookmarks as bookmark}
      <li class="bookmark">
        <a href={bookmark.url}>{bookmark.name}</a>
      </li>
      {/each}
    </ul>
  </div>
  {/each}
{:else}
  <p class="no-bookmarks">{strings.noBookmarksFound}</p>
{/if}
</div>

<style>
  .container {
    display: flex;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1rem;
    overflow-y: scroll;
  }

  .container:has(.no-bookmarks) {
    justify-content: center;
  }

  .no-bookmarks {
    opacity: var(--opacity-text);
  }

  .tag {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .tag-name {
    margin-bottom: 1rem;
  }

  .bookmark {
    margin-bottom: .5rem;
  }
</style>
