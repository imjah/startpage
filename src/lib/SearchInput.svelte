<script lang="ts">
  import global from '../config'
  import strings from '../share/strings'
  import { Config, config } from '../share/config'
  import { Channels } from '../share/channels'

  let {
    error = $bindable(),
    suggestions = $bindable(),
    isOpen = $bindable(),
  } = $props()

  let focusKeybind = Config.getUsedKeybind($config.keybind.focusSearch)
  let timeout = 0
  let input: HTMLElement
  let value = $state('')
  let placeholder = `${strings.searchForChannel} (${focusKeybind})`

  let open = () =>
    isOpen = true

  let focus = (e: KeyboardEvent) => {
    if (e.key != focusKeybind || input.contains(e.target))
      return

    input.focus()
  }

  let search = () =>
    Channels.search(value)
    .then(r => suggestions = r.items || [])
    .catch(e => error = e)

  let searchDelayed = () => {
    if (timeout)
      clearTimeout(timeout)

    timeout = setTimeout(search, global.searchDelayInMiliseconds)
  }
</script>

<svelte:window onkeyup={focus} />

<form>
  <input
    type="search"
    size={placeholder.length}
    placeholder={placeholder}
    oninput={searchDelayed}
    onfocus={open}
    bind:value
    bind:this={input}
  >
</form>

<style>
  input {
    padding: var(--gap-2);
    color: var(--color-surface-fg);
    background: var(--color-surface);
    border: none;
    outline: none;
  }

  input:hover {
    background: var(--color-surface-light);
  }

  input:focus {
    outline: var(--outline-size) var(--outline-style) var(--color-accent);
  }
</style>
