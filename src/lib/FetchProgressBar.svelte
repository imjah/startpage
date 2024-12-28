<script lang="ts">
  import { status } from '../share/status'

  let max   = $derived($status.feed.fetching.max)
  let now   = $derived(max - $status.feed.fetching.now.length)
  let width = $derived(max ? now / max * 100 + 'vw' : 0)
</script>

<aside class="progress-bar">
  <div class="progress-bar__now" class:transition={width} style:width></div>
</aside>

<style lang="scss">
  .progress-bar {
    position: fixed;
  }

  .progress-bar__now {
    height: .2em;
    background: var(--color-accent);
  }

  .progress-bar__now.transition {
    transition: width .01s
  }
</style>
