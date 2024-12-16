<script lang="ts">
  import { Channels, channels } from '../share/channels'
  import strings from '../share/strings'
  import Empty from './Empty.svelte';
  import SettingsList from './SettingsList.svelte';
  import SettingsListChannelsItem from './SettingsListChannelsItem.svelte';
</script>

{#if $channels.size}
  <SettingsList>
    {#each $channels as [id, {name, displayName}]}
      <SettingsListChannelsItem
        {name}
        bind:displayName
        remove={() => Channels.delete(id)} />
    {/each}
  </SettingsList>
{:else}
  <Empty message={strings.noChannelsFound} />
{/if}
