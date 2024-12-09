<script lang="ts">
  let {
    padding = undefined,
    children
  } = $props()
</script>

<li style:padding>
  {@render children()}
</li>

<style>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li:hover {
    background-color: var(--color-surface-light);
  }
</style>
