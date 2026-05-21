<script lang="ts">
  import Closeable from "./Closeable.svelte";
  import InputButton from "./InputButton.svelte";

  let {
    value,
    children,
    open = $bindable(false),
    right = false
  } = $props()
</script>

<Closeable bind:open>
  <div class="container">
    <InputButton {value} focus={open} onclick={() => open = !open} />

    {#if open}
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
    z-index: $nav-z-index;
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
