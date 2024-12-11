<script lang="ts">
  import ButtonRemove from './ButtonRemove.svelte';
  import SettingsListItem from './SettingsListItem.svelte';

  let {
    name,
    displayName,
    update,
    remove,
    onChange,
    onDiscard
  } = $props()

  let changed = $state(false)

  let handleChange = (e, discard = false) => {
    changed = !discard && e.target.value !== displayName

    if (changed)
      onChange()
    else
      onDiscard()
  }

  let updateOnEnterKey = e => {
    if (e.key !== 'Enter')
      return

    update({displayName: e.target.value})

    handleChange(e, true)
  }
</script>

<SettingsListItem>
  <div class="stretch">
    <input
      class="name"
      class:changed={changed}
      value={displayName}
      placeholder={name}
      oninput={e => handleChange(e)}
      onkeyup={e => updateOnEnterKey(e)}>
  </div>
  <ButtonRemove {remove} margin="0 1rem" />
</SettingsListItem>

<style>
  .name {
    padding: 1rem;
    color: inherit;
    background-color: inherit;
    border: none;
    outline: none;
  }

  .stretch {
    display: grid;
    flex-grow: 1;
  }

  .changed {
    color: var(--color-warrning);
  }
</style>
