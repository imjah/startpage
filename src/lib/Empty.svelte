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
    color: var(--color-fg-inactive);
  }
</style>
