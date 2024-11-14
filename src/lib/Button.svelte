<script lang="ts">
  import { type Snippet } from 'svelte'
  
  let { value, children }: {value: string, children: Snippet} = $props()

  let isOpen = $state(false)

  let closeIfFocusLost = ({ relatedTarget, currentTarget }) => {
    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget))
      return

    isOpen = false
  }
</script>

<div class="wrapper" onfocusout={closeIfFocusLost}>
  <input type="button" value={value} onclick={() => isOpen = !isOpen}>

  {#if isOpen}
  <div class="content">
  	{@render children()}
  </div>
  {/if}
</div>

<style>
  .wrapper {
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

  input:focus {
    background: var(--color-bg-light);
    outline: none;
  }

  .content {
    position: absolute;
    top: 100%;
    right: 0;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
  }
</style>
