<script lang="ts">
  import Feed from './lib/Feed.svelte';
  import Bookmarks from './lib/Bookmarks.svelte';
  import Button from './lib/Button.svelte';
  import Channels from './lib/Channels.svelte';
</script>

<main>
  <nav>
    <Button value="Add channel">
      <Channels />
    </Button>
    <Button value="Add bookmark">
      undefined
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
