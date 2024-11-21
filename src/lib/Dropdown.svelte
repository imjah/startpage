<script lang="ts">
  let { value, open = false, children } = $props()

  let isOpen = $state(open)
  let container: HTMLElement;
</script>

<svelte:window onclick={e => container.contains(e.target) || (isOpen = false)} />

<div class="container" bind:this={container}>
  <input class="nav-button" class:focus={isOpen} type="button" {value} onclick={() => isOpen = !isOpen}>

  {#if isOpen}
  <div class="content">
  	{@render children()}
  </div>
  {/if}
</div>

<style>
  .container {
    position: relative;
  }

  .content {
    position: absolute;
    top: 100%;
    right: 0;
    padding: 1rem;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
  }

  .nav-button {
    margin-left: .5rem;
  }
</style>
