<script lang="ts">
  import NavigationButton from "./NavigationButton.svelte";

  let { value, children,  open = false } = $props()
  let isOpen = $state(open)
  let container: HTMLElement;
</script>

<svelte:window onclick={e => container.contains(e.target) || (isOpen = false)} />

<div bind:this={container}>
  <NavigationButton {value} bind:open={isOpen} />

  {#if isOpen}
    <div class="content">
    	{@render children()}
    </div>
  {/if}
</div>

<style>
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 50vw;
    max-width: 95vw;
    min-height: 50vh;
    max-height: 95vh;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
    overflow: scroll;
  }
</style>
