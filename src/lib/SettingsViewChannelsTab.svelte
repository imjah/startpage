<script lang="ts">
  import channels from '../share/channels'
  import strings from '../share/strings'
  import Empty from './Empty.svelte';
  import SettingsList from './SettingsList.svelte';
  import SettingsListChannelsItem from './SettingsListChannelsItem.svelte';

  let { store } = channels
</script>

{#if $store.size}
  <SettingsList>
    {#each $store as [id, {name, displayName}]}
      <SettingsListChannelsItem
        {id}
        {name}
        bind:displayName={displayName}
        remove={() => channels.delete(id)} />
    {/each}
  </SettingsList>
{:else}
  <Empty message={strings.noChannelsFound} />
{/if}
