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
    <Button value="Add bookmark">
      <p>dupa</p>
    </Button>
  </nav>
  <div class="content">
    <Feed />
    <Channels />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  nav {
    display: flex;
    justify-content: right;
  }

  .content {
    display: flex;
    flex: 1;
    margin: 1rem;
    align-items: center;
    justify-content: center;
  }
</style>
