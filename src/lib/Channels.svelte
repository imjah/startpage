<script lang="ts">
  import { channels, setChannel, deleteChannel } from '../store/channels.ts';

  let prompt = $state('')
</script>

<section>
  <div>
    <input type="text" bind:value={prompt}>
    <input type="button" value="add" onclick={() => setChannel(prompt, "dupa")}>
  </div>
  <ul>
  {#each $channels as channel}
    <li>
      {channel[0]}
      {channel[1]}
    </li>
  {/each}
  </ul>
</section>

<style>
  section {
    background: #383838;
  }

  ul {
    padding: 0;
    list-style-type: none;
    text-align: left;
  }
</style>
