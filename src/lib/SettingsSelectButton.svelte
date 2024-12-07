<script lang="ts">
  let {
    id,
    label,
    use = $bindable(),
    options = $bindable()
  } = $props()

  let setUse = e => {
    use.value = e.target.options[e.target.selectedIndex].value
    use.label = e.target.options[e.target.selectedIndex].label
  }
</script>

{#snippet option(value: string, label: string)}
  <option {value}>{label}</option>
{/snippet}

<label for={id}>{label}</label>

<select onchange={setUse} {id}>
  {@render option(use.value, use.label)}

  {#each options as {value, label}}
    {#if use.value != value}
      {@render option(value, label)}
    {/if}
  {/each}
</select>

<style>
  select {
    appearance: none;
    padding: .5rem;
    color: var(--color-accent);
    background-color: var(--color-bg);
    border: none;
    outline: none;
  }

  select:hover,
  select:focus {
    color: var(--color-fg);
    background-color: var(--color-accent);
    cursor: pointer;
  }
</style>
