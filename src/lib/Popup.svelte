<script lang="ts">
  import Closeable from "./Closeable.svelte";
  import InputButton from "./InputButton.svelte";

  let {
    value,
    children,
    open = false
  } = $props()

  let isOpen = $state(open)
</script>

<Closeable bind:open={isOpen}>
  <InputButton {value} bind:open={isOpen} />

  {#if isOpen}
    <div class="content">
    	{@render children()}
    </div>
  {/if}
</Closeable>

<style>
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65rem;
    max-width: 100vw;
    height: 40rem;
    max-height: 100vh;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
    overflow: scroll;
  }
</style>
