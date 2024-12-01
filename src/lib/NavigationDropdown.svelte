<script lang="ts">
  import NavigationButton from "./NavigationButton.svelte";

  let { value, children, right = false, open = false } = $props()
  let isOpen = $state(open)
  let container: HTMLElement;
</script>

<svelte:window onclick={e => container.contains(e.target) || (isOpen = false)} />

<div class="container" bind:this={container}>
  <NavigationButton {value} bind:open={isOpen} />

  {#if isOpen}
    <div class="content" class:right={right}>
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

  .right {
    left: 0;
    right: auto;
  }
</style>
