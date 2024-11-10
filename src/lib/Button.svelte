<script lang="ts">
  import { type Snippet } from 'svelte'
  
  let { value, children }: {value: string, children: Snippet} = $props()

  let showChildren = $state(false)
</script>

<input type="button" value={value} onclick={() => showChildren = !showChildren}>

{#if showChildren}
	{@render children()}
{/if}

<style>
  input {
    position: relative;
    margin: 0.5rem 1rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: monospace;
    color: var(--color-accent);
    background: var(--color-bg);
    border: none;
    cursor: pointer;
  }

  input:focus {
    color: var(--color-bg);
    background: var(--color-accent);
  }
</style>
