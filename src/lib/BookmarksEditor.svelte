<script lang="ts">
  import strings from '../strings.ts'
</script>

<div class="container">
  <input type="text" placeholder="{strings.url}">
  <input type="text" placeholder="{strings.name}">
  <input type="text" placeholder="{strings.tag}">
  <div class="grid">
    <input type="button" value="{strings.add}">
  </div>
</div>

<style>
  .container {
    margin: 1rem;
  }

  input[type=text], input[type=button] {
    padding: .5rem;
    width: 20rem;
  }

  input[type=text]:focus, input[type=button]:focus {
    outline: var(--outline-size) var(--outline-style) var(--color-accent-light);
  }

  input[type=text] {
    margin-bottom: .5rem;
    color: var(--color-fg);
    background-color: var(--color-bg);
    border: var(--border-size) var(--border-style) var(--color-accent);
  }

  input[type=button] {
    margin-top: 1rem;
    color: var(--color-fg);
    background-color: var(--color-accent);
    border: none;
  }

  input[type=button]:hover {
    cursor: pointer;
  }

  .grid {
    display: grid;
  }
</style>
