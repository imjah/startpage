<script lang="ts">
  let { message } = $props()
</script>

<div class="container">
  {message}
</div>

<style>
  .container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    min-width: 20rem;
    color: var(--color-fg-inactive);
    user-select: none;
  }
</style>
