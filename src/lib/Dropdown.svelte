<script lang="ts">
  let { open = false, value, children } = $props()

  let isOpen = $state(open)

  let toggle = () => isOpen = !isOpen

  let closeIfFocusLost = ({ relatedTarget, currentTarget }) => {
    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget))
      return

    isOpen = false
  }
</script>

<div class="container" onfocusout={closeIfFocusLost}>
  <input class:focus={isOpen} type="button" value={value} onclick={toggle}>

  {#if isOpen}
  <div class="content">
  	{@render children()}
  </div>
  {/if}
</div>

<style>
  .container {
    position: relative;
    margin: 0.75rem;
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-accent);
    background: var(--color-bg);
    border: none;
    cursor: pointer;
  }

  .focus, input:focus {
    background: var(--color-bg-light);
    outline: none;
  }

  .content {
    position: absolute;
    top: 100%;
    right: 0;
    padding: 1rem;
    color: var(--color-fg-light);
    background: var(--color-bg-light);
  }
</style>
