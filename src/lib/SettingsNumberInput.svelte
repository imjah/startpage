<script>
  let {
    id,
    label,
    min = undefined,
    max = undefined,
    value = $bindable()
  } = $props()
</script>

<label for={id}>{label}</label>
<input type="number" bind:value={value} {id} {min} {max}>

<style>
  label {
    user-select: none;
  }

  input {
    width: 3.5rem;
    padding: .5rem .25rem .5rem .5rem;
    color: var(--color-accent);
    background-color: var(--color-bg);
    border: none;
    outline: none;
  }

  input:hover,
  input:focus {
    color: var(--color-fg);
    background-color: var(--color-accent);
  }
</style>
