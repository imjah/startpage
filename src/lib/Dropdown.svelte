<script lang="ts">
  import Closeable from "./Closeable.svelte";
  import InputButton from "./InputButton.svelte";

  let {
    value,
    children,
    open = false,
    right = false
  } = $props()

  let isOpen = $state(open)
</script>

<Closeable bind:open={isOpen}>
  <div class="container">
    <InputButton {value} bind:open={isOpen} />

    {#if isOpen}
      <div class="content" class:right>
      	{@render children()}
      </div>
    {/if}
  </div>
</Closeable>

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
