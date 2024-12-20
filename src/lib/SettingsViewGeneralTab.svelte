<script lang="ts">
  import strings from '../share/strings'
  import { config } from '../share/config'
  import InputNumber from './InputNumber.svelte';
  import InputSelect from './InputSelect.svelte';
  import SettingsList from './SettingsList.svelte';
  import SettingsListItem from './SettingsListItem.svelte';

  let padding = '1rem'
</script>

<SettingsList>
  <SettingsListItem {padding}>
    <InputSelect
      id={strings.instanceId}
      label={strings.instance}
      bind:use={$config.instance}
      bind:options={$config.instances} />
  </SettingsListItem>

  <SettingsListItem {padding}>
    <InputNumber
      id={strings.cacheId}
      label={strings.cache}
      min={0}
      bind:value={$config.cacheLifetimeInMinutes} />
  </SettingsListItem>

  <SettingsListItem {padding}>
    <InputNumber
      id={strings.feedLimitId}
      label={strings.feedLimit}
      min={0}
      bind:value={$config.feedLimit} />
  </SettingsListItem>
</SettingsList>
