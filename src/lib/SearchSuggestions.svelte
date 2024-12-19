<script lang="ts">
  let {
    suggestions = $bindable()
  } = $props()
</script>

<ul tabindex="-1">
  {#each suggestions as {name}}
    <li>{name}</li>
  {/each}
</ul>

<style>
  ul {
    position: absolute;
    top: 100%;
    width: 100%;
    max-height: 10rem;
    color: var(--color-surface-fg);
    background: var(--color-surface);
    overflow-y: scroll;
  }

  li {
    padding: var(--gap-1) var(--gap-0);
    user-select: none;
  }

  li:hover,
  li:focus {
    background: var(--color-surface-light);
  }
</style>
