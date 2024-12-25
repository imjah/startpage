<script lang="ts">
  import strings from '../share/strings'

  let { error = $bindable(), value = $bindable(), placeholder } = $props()
</script>

<input type="text" class:error={error} bind:value={value} {placeholder} title={error ? strings.empty : ''}>

<style>
  input[type=text] {
    width: 20rem;
    padding: .5rem;
    margin-bottom: .5rem;
    color: var(--color-fg);
    background-color: var(--color-bg);
    border: var(--border) var(--color-accent);
  }

  input[type=text]:focus {
    outline: var(--outline) var(--color-accent-light);
  }

  input[type=text].error {
    border-color: var(--color-error);
  }

  input[type=text]:focus.error {
    outline-color: var(--color-error);
  }
</style>
