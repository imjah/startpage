<script lang="ts">
  import Bookmarks from './lib/Bookmarks.svelte';
  import BookmarksEditor from './lib/BookmarksEditor.svelte';
  import Button from './lib/Button.svelte';
  import Feed from './lib/Feed.svelte';
  import Channels from './lib/Channels.svelte';
  import strings from './strings.ts'
</script>

<main>
  <nav>
    <Button value="{strings.addChannel}">
      <Channels />
    </Button>
    <Button value="{strings.addBookmark}" open={true}>
      <BookmarksEditor />
    </Button>
  </nav>
  <section>
    <Feed width="33%"/>
    <Bookmarks width="67%" />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  nav {
    display: flex;
    justify-content: right;
  }

  section {
    display: flex;
    flex-grow: 1;
    overflow-y: hidden;
  }
</style>
