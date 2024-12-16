<script lang="ts">
  let {
    children
  } = $props()
</script>

<main>
  {@render children()}
</main>

<style>
  main {
    display: flex;
    flex-grow: 1;
    overflow-y: hidden;
  }
</style>
