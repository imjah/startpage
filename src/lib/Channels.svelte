<script lang="ts">
  import { channels } from './channels.ts';

  let prompt = $state('')

  let create = () => {
    channels.update(c => {
      c.push(prompt)

      return c
    })
  }

  let remove = (channel:string) => {
    channels.update(c => {
      c.splice(
        c.findIndex(v => v === channel)
      )

      return c
    })
  }
</script>

<section class="container">
  <div>
    <input type="text" bind:value={prompt}>
    <input type="button" value="add" onclick={create}>
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
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 30vw;
    height: 60vh;
    color: var(--color-fg);
    background: var(--color-bg);
    border: 1px solid var(--color-accent);
    overflow: scroll;
    text-align: center;
    padding: 1rem;
  }

  ul {
    padding: 0;
    list-style-type: none;
    text-align: left;
  }
</style>
