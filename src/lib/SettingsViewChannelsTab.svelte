<script lang="ts">
  import { SvelteSet } from 'svelte/reactivity';
  import channels from '../share/channels'
  import strings from '../share/strings'
  import Empty from './Empty.svelte';
  import SettingsList from './SettingsList.svelte';
  import SettingsListChannelsItem from './SettingsListChannelsItem.svelte';

  let { store } = channels
  let changes = new SvelteSet()
</script>

{#if $store.size}
  <SettingsList hint={changes.size > 0}>
    {#each $store as [id, {name, displayName}]}
      <SettingsListChannelsItem
        {name}
        {displayName}
        update={(values: Object) => channels.update(id, values)}
        remove={() => channels.delete(id)}
        onChange={() => changes.add(id)}
        onDiscard={() => changes.delete(id)} />
    {/each}
  </SettingsList>
{:else}
  <Empty message={strings.noChannelsFound} />
{/if}
