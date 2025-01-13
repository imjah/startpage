<script lang="ts">
  import { config } from '../share/config';
  import strings from '../share/strings';
  import { rejectIfResponseIsNotOk } from '../util/fetch';
  import Tooltip from './Tooltip.svelte';
  import IconImage from './icons/Image.svelte';
  import IconSpinner from './icons/Spinner.svelte';

  let {
    src,
    alt,
    crossorigin = undefined
  } = $props();

  let image: HTMLImageElement;
  let error    = $state();
  let fetching = $state();

  $effect(() => {
    if (src === image.src)
      return;

    error = false;
    fetching = true;

    fetch(src, {
      signal: AbortSignal.timeout($config.timeoutInSeconds * 1000)
    })
    .then(rejectIfResponseIsNotOk)
    .then(_ => image.src = src)
    .catch(_ => error = true);
  })
</script>

<img
  bind:this={image}
  class:hide={fetching || error}
  onload={() => fetching = false}
  {alt}
  {crossorigin}
>

{#if fetching || error}
  <i class="icon" class:error>
    {#if error}
      <Tooltip text={strings.imageFailed}>
        <IconImage />
      </Tooltip>
    {:else}
      <IconSpinner />
    {/if}
  </i>
{/if}

<style lang="scss">
  img {
    height: 100%;
    border-radius: inherit;

    &.hide {
      display: none;
    }
  }

  .icon {
    &.error {
      color: var(--color-error);
    }
  }
</style>
