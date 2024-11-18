<script lang="ts">
  import Feed from './lib/Feed.svelte';
  import Button from './lib/Button.svelte';
  import Channels from './lib/Channels.svelte';
</script>

<main>
  <nav>
    <Button value="Add channel">
      <Channels />
    </Button>
  </nav>
  <section>
    <Feed width="33%"/>
    <Feed width="67%"/>
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  nav {
    text-align: right;
  }

  section {
    display: flex;
    flex-grow: 1;
    overflow-y: hidden;
  }
</style>
