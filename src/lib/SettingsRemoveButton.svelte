<script lang="ts">
  import { onDestroy } from 'svelte';
  import strings from '../strings'

  let { remove } = $props()
  let isRemoved = $state(false)

  onDestroy(() => isRemoved && remove())
</script>

<input
  type="button"
  class:removed={isRemoved}
  value={isRemoved ? strings.restore : strings.remove}
  onclick={() => isRemoved = !isRemoved}>

<style>
  input {
    width: 4.5rem;
    padding: .5rem;
    font-weight: bold;
    color: var(--color-accent);
    background-color: var(--color-bg);
    border: none;
    outline: none;
    cursor: pointer;
  }

  input:hover,
  input:focus {
    color: var(--color-fg);
    background-color: var(--color-accent);
  }

  input.removed {
    color: var(--color-warrning);
  }

  input.removed:hover,
  input.removed:focus {
    color: var(--color-warrning-fg);
    background-color: var(--color-warrning);
  }
</style>
