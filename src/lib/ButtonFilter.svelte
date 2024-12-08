<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';
  import channels from '../share/channels'
  import strings from '../share/strings'

  let { id = $bindable(), open = false } = $props()
  let { store } = channels
  let isOpen = $state(open)
  let container: HTMLElement

  let storeSortedByName = $derived(
    $store.entries().map(
      ([id, channel]) => ({
        id: id,
        name: channel.displayName || channel.name,
        nameLowerCase: (channel.displayName || channel.name).toLowerCase()
      })
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
  {@render button($store.get(id)?.displayName || strings.all, () => isOpen = !isOpen)}
  {#if isOpen}
    <ul class="content">
      {#if id}
        <li>
          {@render button(strings.all, () => id = '')}
        </li>
      {/if}
      {#each storeSortedByName as channel}
        {#if id != channel.id}
          <li>
            {@render button(channel.name, () => id = channel.id)}
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
