<script lang="ts">
  import global from '../config'
  import { status } from '../share/status'

  let max = $derived($status.feed.fetching.max)
  let now = $derived(max - $status.feed.fetching.now.length)

  let width = $derived(
    max
    ? Math.max(
        Math.min(now, max) / max * 100,
        global.fetching.widthInVw
      ) + 'vw'
    : 0
  )
</script>

<aside
  class="progress-bar"
  class:animate={width}
  style:width
  role="progressbar"
  aria-valuemax={max}
  aria-valuenow={now}
></aside>

<style lang="scss">
  .progress-bar {
    position: fixed;
    height: .2em;
    background: var(--color-accent);

    &.animate {
      transition: width .01s
    }
  }
</style>
