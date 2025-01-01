<script lang="ts">
  import global from '../config'
  import strings from '../share/strings'
  import { Channels } from '../share/channels'
  import { Config, config } from '../share/config'
  import Closeable from './Closeable.svelte';

  let isOpen = $state(false)
  let error = $state('')
  let suggestions = $state([])
  let focusKeybind = Config.getUsedKeybind($config.keybind.focusSearch)
  let timeout = 0
  let input: HTMLElement
  let value = $state('')
  let placeholder = `${strings.searchForChannel} (${focusKeybind})`

  let open = () =>
    isOpen = true

  let close = () =>
    isOpen = false

  let focus = (e: KeyboardEvent) => {
    if (e.key != focusKeybind || input.contains(e.target))
      return

    input.focus()
  }

  let search = () =>
    Channels.search(value)
    .then(r => suggestions = r.items || [])
    .then(_ => open())
    .catch(e => error = e)

  let searchDelayed = () => {
    if (timeout)
      clearTimeout(timeout)

    timeout = setTimeout(search, global.searchDelayInMiliseconds)
  }
</script>

<svelte:window onkeyup={focus} />

<Closeable bind:open={isOpen}>
  <search class="search">
    <form>
      <input
        class="search__input nav__item nav__item--input"
        type="search"
        size={placeholder.length}
        placeholder={placeholder}
        oninput={searchDelayed}
        onblur={close}
        onfocus={open}
        bind:value
        bind:this={input}
      >
    </form>

    {#if isOpen}
      <ul class="search__output" tabindex="-1">
        {#each suggestions as {name}}
          <li class="search__output-item">{name}</li>
        {/each}
      </ul>
    {/if}
  </search>
</Closeable>

<style lang="scss">
  .search {
    position: relative;
  }

  .search__input {
    color: var(--color-surface-fg);
    background: var(--color-surface);

    &:hover {
      background: var(--color-surface-light);
    }

    &:focus {
      outline: var(--outline) var(--color-accent);
    }
  }

  .search__output {
    position: absolute;
    top: 100%;
    width: 100%;
    max-height: 10rem;
    color: var(--color-surface-fg);
    background: var(--color-surface);
    overflow-y: scroll;

    &-item {
      padding: var(--gap-1) var(--gap-0);
      user-select: none;

      &:hover,
      &:focus {
        background: var(--color-surface-light);
      }
    }
  }
</style>
