<script lang="ts">
  import ButtonRemove from './ButtonRemove.svelte';
  import SettingsListItem from './SettingsListItem.svelte';

  let {
    name,
    displayName = $bindable(),
    remove
  } = $props()
</script>

<SettingsListItem>
  <div class="stretch">
    <input
      class="name"
      bind:value={displayName}
      placeholder={name}>
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
</style>
