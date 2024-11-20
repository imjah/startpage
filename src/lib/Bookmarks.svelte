<script lang="ts">
  type Tag = string

  interface Bookmark {
    url: string;
    name: string;
  }

  let b = new Map<Tag, Bookmark[]>([
    ['youtube', [
      {'url': '', 'name': 'pop science'},
      {'url': '', 'name': 'didaskalia'},
      {'url': '', 'name': 'lex friedman'}
    ]],
    ['twitch', [
      {'url': '', 'name': 'togglebit'},
      {'url': '', 'name': 'kapitanbomba'},
    ]],
    ['reddit', [
      {'url': '', 'name': 'starpages'},
      {'url': '', 'name': 'archlinux'}
    ]]
  ])

  let { width = '100%', columns = 3 } = $props()
</script>

<div class="container" style:width={width}>
  {#each b as [tag, bookmarks]}
  <div class="inner-container" style:flex-basis={`${100 / columns}%`}>
    <ul class="tag">
      <h2 class="title">{tag}</h2>

      {#each bookmarks as bookmark}
      <li class="bookmark">
        <a href="{bookmark.url}">{bookmark.name}</a>
      </li>
      {/each}
    </ul>
  </div>
  {/each}
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

  .inner-container {
    display: flex;
    justify-content: center;
  }

  .tag {
    margin-bottom: 1rem;
  }

  .title {
    margin-bottom: 1rem;
  }

  .bookmark {
    margin-bottom: .5rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  h2 {
    margin: 0;
  }
</style>
