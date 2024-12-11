<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';
  import channels from '../share/channels'
  import strings from '../share/strings'

  let { id = $bindable(), open = false } = $props()
  let { store } = channels
  let isOpen = $state(open)
  let container: HTMLElement

  let channelsSortedByDisplayName = $derived(
    new Map([...$store].sort((a, b) =>
      (a[1].displayName || a[1].name).localeCompare((b[1].displayName || b[1].name))
    ))
  )
</script>

<svelte:window onclick={e => container.contains(e.target) || (isOpen = false)} />

{#snippet button(value: string | undefined, onclick: MouseEventHandler<HTMLInputElement>)}
  <input class="nav-button" type="button" {value} {onclick}>
{/snippet}

<div class="container" bind:this={container}>
  {@render button($store.get(id)?.displayName || $store.get(id)?.name || strings.all, () => isOpen = !isOpen)}
  {#if isOpen}
    <ul class="content">
      {#if id}
        <li>
          {@render button(strings.all, () => id = '')}
        </li>
      {/if}
      {#each channelsSortedByDisplayName as [channel_id, {name, displayName}]}
        {#if id != channel_id}
          <li>
            {@render button(displayName || name, () => id = channel_id)}
          </li>
        {/if}
      {/each}
    </ul>
  {/if}
</div>

<style>
  .container {
    position: relative;
  }

  .content {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    max-height: min(calc(100vh - 2.9rem), 31.8rem);
    overflow-y: scroll;
    background-color: var(--color-bg);
  }

  li {
    display: grid;
    overflow-x: hidden;
  }

  li .nav-button {
    color: var(--color-fg);
    text-align: left;
  }
</style>
