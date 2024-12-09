<script lang="ts">
  let { children } = $props()
</script>

<li>
  {@render children()}
</li>

<style>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  li:hover {
    background-color: var(--color-surface-light);
  }
</style>
