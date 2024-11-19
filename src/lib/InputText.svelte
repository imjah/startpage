<script lang="ts">
  let { value = $bindable(), placeholder } = $props()
</script>

<input type="text" bind:value={value} {placeholder}>

<style>
  input[type=text] {
    width: 20rem;
    padding: .5rem;
    margin-bottom: .5rem;
    color: var(--color-fg);
    background-color: var(--color-bg);
    border: var(--border-size) var(--border-style) var(--color-accent);
  }

  input[type=text]:focus {
    outline: var(--outline-size) var(--outline-style) var(--color-accent-light);
  }
</style>
