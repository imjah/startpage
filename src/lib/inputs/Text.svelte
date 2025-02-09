<script lang="ts">
  let {
    value = $bindable(),
    ...args
  } = $props()
</script>

<input class="text" bind:value {...args}>

<style lang="scss">
  @use '../scss/variables' as *;
  
  .text {
    padding: $gap-1;
    color: var(--color-fg);
    background: var(--color-surface);
    border: none;
    border-bottom: $border transparent;

    &:focus {
      outline: $outline var(--color-accent);
    }

    &:disabled {
      color: var(--color-fg-inactive);
    }

    &:required {
      border-color: var(--color-error);

      &:focus {
        border-color: transparent;
        outline-color: var(--color-error);
      }
    }
  }
</style>
