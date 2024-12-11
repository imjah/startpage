<script lang="ts">
  import strings from '../share/strings'

  let {
    hint = false,
    children
  } = $props()
</script>

<div class="container">
  <ul class="list">
    {@render children()}
  </ul>
  {#if hint}
    <p class="hint">{strings.saveHint}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: scroll;
    user-select: none;
  }

  .list {
    flex-grow: 1;
    overflow-y: scroll;
  }

  .hint {
    padding: 1rem;
    color: var(--color-surface-inactive);
  }
</style>
