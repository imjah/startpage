<script lang="ts">
  import bookmarks from '../share/bookmarks'
  import strings from '../share/strings'
  import Empty from './Empty.svelte';
  import SettingsList from './SettingsList.svelte';
  import SettingsListBookmarksItem from './SettingsListBookmarksItem.svelte';

  let { store } = bookmarks
</script>

{#if $store.size}
  <SettingsList>
    {#each $store as [url, {tag, name}]}
      <SettingsListBookmarksItem
        {url}
        {tag}
        {name}
        remove={() => bookmarks.delete(url)} />
    {/each}
  </SettingsList>
{:else}
  <Empty message={strings.noBookmarksFound} />
{/if}
