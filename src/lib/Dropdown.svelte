<script lang="ts">
  let { open = false, value, children } = $props()

  let isOpen = $state(open)
  let container;

  let toggle = () => isOpen = !isOpen
  let closeOnBlur = (e) => container.contains(e.target) || (isOpen = false)
</script>

<svelte:window onclick={closeOnBlur} />

<div class="container" bind:this={container}>
  <input class:focus={isOpen} type="button" {value} onclick={toggle}>

  {#if isOpen}
  <div class="content">
  	{@render children()}
  </div>
  {/if}
</div>

<style>
  .container {
    position: relative;
    margin: 0.75rem;
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-accent);
    background: var(--color-bg);
    border: none;
    cursor: pointer;
  }

  .focus, input:focus {
    background: var(--color-bg-light);
    outline: none;
  }

  .content {
    position: absolute;
    top: 100%;
    right: 0;
    padding: 1rem;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
  }
</style>
