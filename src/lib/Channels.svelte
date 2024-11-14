<script lang="ts">
  import { channels, create, remove } from '../store/channels.ts';

  let prompt = $state('')
</script>

<section>
  <div>
    <input type="text" bind:value={prompt}>
    <input type="button" value="add" onclick={() => {create({"id": prompt, "name": ""}})}>
  </div>
  <ul>
  {#each $channels as channel}
    <li>
      <input type="button" value={channel} onclick={() => {remove(channel)}}>
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
