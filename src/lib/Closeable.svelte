<script lang="ts">
  import { config } from '../share/config'

  let {
    children,
    open = $bindable()
  } = $props()

  let container: HTMLElement;

  let close = () =>
    open = false;

  let closeIfPressedCloseKey = (e: KeyboardEvent) =>
    e.key == $config.keybind.close && close()

  let closeIfClickedElementNotInContainer = (e: MouseEvent) =>
    container.contains(e.target as HTMLElement) || close()
</script>

<svelte:window
  onkeyup={closeIfPressedCloseKey}
  onclick={closeIfClickedElementNotInContainer}
/>

<div bind:this={container}>
  {@render children()}
</div>
