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
    <InputButton {value} focus={isOpen} onclick={() => isOpen = !isOpen} />

    {#if isOpen}
      <div class="content" class:right>
      	{@render children()}
      </div>
    {/if}
  </div>
</Closeable>

<style lang="scss">
  @use 'scss/variables' as *;
  @use 'scss/breakpoints' as *;

  .container {
    position: relative;
  }

  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: $gap-3;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
  }

  @include breakpoint-md {
    .content {
      position: absolute;
      top: 100%;
      right: 0;
      left: unset;
      transform: none;
    }

    .right {
      left: 0;
      right: auto;
    }
  }
</style>
