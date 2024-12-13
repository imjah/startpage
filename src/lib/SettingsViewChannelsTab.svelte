<script lang="ts">
  import { SvelteSet } from 'svelte/reactivity';
  import { Channels, channels } from '../share/channels'
  import strings from '../share/strings'
  import Empty from './Empty.svelte';
  import SettingsList from './SettingsList.svelte';
  import SettingsListChannelsItem from './SettingsListChannelsItem.svelte';

  let changes = new SvelteSet()
</script>

{#if $channels.size}
  <SettingsList hint={changes.size > 0}>
    {#each $channels as [id, {name, displayName}]}
      <SettingsListChannelsItem
        {name}
        {displayName}
        update={(values: Object) => Channels.update(id, values)}
        remove={() => Channels.delete(id)}
        onChange={() => changes.add(id)}
        onDiscard={() => changes.delete(id)} />
    {/each}
  </SettingsList>
{:else}
  <Empty message={strings.noChannelsFound} />
{/if}
