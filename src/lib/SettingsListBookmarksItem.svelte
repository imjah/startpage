<script lang="ts">
  import ButtonRemove from './ButtonRemove.svelte'
  import SettingsListItem from './SettingsListItem.svelte'

  let { url, tag, name, remove } = $props()
</script>

<SettingsListItem>
  <p>
    {tag}: {name}
  </p>
  <ButtonRemove {remove}/>
</SettingsListItem>

<style>

</style>
