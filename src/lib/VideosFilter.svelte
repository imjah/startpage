<script lang="ts">
  import strings from '../strings'
  import Channels from '../store/channels'
  import type { MouseEventHandler } from 'svelte/elements';

  let { current = $bindable(), open = false } = $props()
  let { store } = Channels
  let isOpen = $state(open)
  let container: HTMLElement

  let storeSortedByName = $derived(
    $store.entries().map(
      ([id, channel]) => ({id: id, name: channel.name, nameLowerCase: channel.name.toLowerCase()})
    )
    .toArray()
    .sort((a,b) => a.nameLowerCase < b.nameLowerCase ? -1 : (a.nameLowerCase > b.nameLowerCase ? 1 : 0))
  )
</script>

<svelte:window onclick={e => container.contains(e.target) || (isOpen = false)} />

{#snippet button(value: string, onclick: MouseEventHandler<HTMLInputElement>)}
  <input class="nav-button" type="button" {value} {onclick}>
{/snippet}

<div class="container" bind:this={container}>
  {@render button($store.get(current)?.name || strings.all, () => isOpen = !isOpen)}
  {#if isOpen}
    <ul class="content">
      {#if current}
        <li>
          {@render button(strings.all, () => current = '')}
        </li>
      {/if}
      {#each storeSortedByName as {id, name}}
        {#if current != id}
          <li>
            {@render button(name, () => current = id)}
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
