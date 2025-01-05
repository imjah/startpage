<script lang="ts">
  import global from '../config'
  import strings from '../share/strings'
  import { Channels } from '../share/channels'
  import { Config, config } from '../share/config'
  import { preventDefault } from '../util/wrappers';
  import Closeable from './Closeable.svelte';

  let isOutputOpen = $state(false)
  let isOutputLocked = $state(false)
  let error = $state('')
  let suggestions = $state([])
  let focusKeybind = Config.getUsedKeybind($config.keybind.focusSearch)
  let timeout = 0
  let input: HTMLElement
  let value = $state('')
  let placeholder = `${strings.searchForChannel} (ctrl+${focusKeybind})`

  let openOutput = () =>
    isOutputOpen = true

  let closeOutput = () =>
    isOutputOpen = false

  let focus = (e: KeyboardEvent) => {
    if (e.repeat || !e.ctrlKey)
      return

    if (e.key == focusKeybind) {
      e.preventDefault()
      input.focus()
    }
  }

  let search = () =>
    Channels.search(value)
    .then(r => suggestions = r.items.slice(0, global.search.max) || [])
    .then(_ => openOutput())
    .catch(e => error = e)

  let searchDelayed = () => {
    if (timeout)
      clearTimeout(timeout)

    timeout = setTimeout(search, global.search.delayInMs)
  }

  let lockOutput = () =>
    isOutputLocked = true

  let unlockOutput = () =>
    isOutputLocked = false

  let lockOutputAndAddChannel = (e: MouseEvent) => {
    if (isOutputLocked)
      return

    lockOutput()

    Channels.add((e.currentTarget as HTMLAnchorElement).href)
    .then(unlockOutput)
  }
</script>

<svelte:document onkeydown={focus} />

<Closeable bind:open={isOutputOpen}>
  <search class="search">
    <form>
      <input
        class="search__input nav__item nav__item--input"
        type="search"
        size={placeholder.length}
        placeholder={placeholder}
        oninput={searchDelayed}
        onfocus={openOutput}
        bind:value
        bind:this={input}
      >
    </form>

    {#if isOutputOpen}
      <ul class="search__output" tabindex="-1">
        {#each suggestions as {url, name, thumbnail}}
          <li>
            <a
              class="search__output-link"
              href={url}
              onclick={preventDefault(lockOutputAndAddChannel)}
            >
              <img
                class="search__output-thumbnail"
                src={thumbnail}
                alt={strings.thumbnail}
                crossorigin="anonymous"
              >
              <p
                class="search__output-name"
                title={name}
              >{name}</p>
            </a>
          </li>
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
    position: relative;
    z-index: 1;
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
    $thumbnail-height: 2.7rem;

    position: absolute;
    top: 100%;
    width: 100%;
    max-height: calc($thumbnail-height * 5);
    color: var(--color-surface-fg);
    background: var(--color-surface);
    overflow-y: scroll;

    &-link {
      display: flex;
      align-items: center;
      text-decoration: none;

      &:hover,
      &:focus {
        background: var(--color-surface-light);
      }
    }

    &-name {
      width: 100%;
      padding: var(--gap-0);
      overflow: hidden;
      text-wrap: nowrap;
      text-overflow: ellipsis;
    }

    &-thumbnail {
      width: $thumbnail-height;
      height: $thumbnail-height;
      padding: var(--gap-1) var(--gap-0);
      border-radius: 50%;
    }
  }
</style>
