<script lang="ts">
  let { value, onclick } = $props()
</script>

<div class="container">
  <input type="button" {value} {onclick}>
</div>

<style>
  .container {
    display: grid;
  }

  input[type=button] {
    width: 20rem;
    padding: .5rem;
    margin-top: 1rem;
    color: var(--color-fg);
    background-color: var(--color-accent);
    border: none;
  }

  input[type=button]:hover {
    cursor: pointer;
  }

  input[type=button]:focus {
    outline: var(--outline-size) var(--outline-style) var(--color-accent-light);
  }
</style>
