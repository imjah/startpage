<script lang="ts">
  import NavigationButton from "./NavigationButton.svelte";

  let { value, children,  open = false } = $props()
  let isOpen = $state(open)
  let container: HTMLElement;
</script>

<svelte:window
  onkeyup={e => e.key == 'Escape' && (isOpen = false)}
  onclick={e => container.contains(e.target) || (isOpen = false)}
/>

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
    width: 50rem;
    max-width: 100vw;
    height: 30rem;
    max-height: 100vh;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
    overflow: scroll;
  }
</style>
