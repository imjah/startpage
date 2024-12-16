<script lang="ts">
  let {
    value,
    focus = undefined,
    onclick
  } = $props()
</script>

<input type="button" class:focus {value} {onclick}>

<style>
  input {
    padding: .75rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-accent);
    background-color: var(--color-bg);
    border: none;
    cursor: pointer;
  }

  input.focus,
  input:focus,
  input:hover {
    background-color: var(--color-bg-light) !important;
    outline: none;
  }
</style>
