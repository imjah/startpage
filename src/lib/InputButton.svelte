<script lang="ts">
  let { value, open = $bindable() } = $props()
</script>

<button class:focus={open} onclick={() => open = !open}>{value}</button>

<style>
  button {
    padding: .75rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-accent);
    background-color: var(--color-bg);
    border: none;
    cursor: pointer;
  }

  button.focus,
  button:focus,
  button:hover {
    background-color: var(--color-bg-light) !important;
    outline: none;
  }
</style>
