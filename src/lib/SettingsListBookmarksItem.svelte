<script lang="ts">
  import ButtonRemove from './ButtonRemove.svelte'
  import SettingsListItem from './SettingsListItem.svelte'

  let { url, tag, name, remove } = $props()
</script>

<SettingsListItem>
  <div class="stretch">
    <input value={`${tag}: ${name}`} disabled>
  </div>
  <ButtonRemove {remove} margin="0 1rem" />
</SettingsListItem>

<style>
  input {
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
