<script lang="ts">
  import strings from '../strings'
  import Channels from '../store/channels'

  let { current = $bindable(), open = false } = $props()
  let { store } = Channels
  let isOpen = $state(open)
  let container: HTMLElement
</script>

<svelte:window onclick={(e) => container.contains(e.target) || (isOpen = false)} />

<div class="container" bind:this={container}>
  <input class="nav-button" type="button" value={$store.get(current)?.name || strings.all} onclick={() => isOpen = !isOpen}>

  {#if isOpen}
	<ul class="content">
	  {#if current}
	  <li>
	    <input class="nav-button" type="button" value={strings.all} onclick={() => current = ''}>
	  </li>
    {/if}
	  {#each $store as [id, channel]}
	  {#if current != id}
	  <li>
	    <input class="nav-button" type="button" value={channel.name} onclick={() => current = id}>
	  </li>
    {/if}
    {/each}
	</ul>
  {/if}
</div>

<style>
  .container {
    position: relative;
  }

  .content {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    background-color: var(--color-bg);
  }

  li {
    display: grid;
    overflow-x: hidden;
  }

  li .nav-button {
    color: var(--color-fg);
    text-align: left;
  }
</style>
