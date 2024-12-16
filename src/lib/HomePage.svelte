<script lang="ts">
  import BookmarksView from './BookmarksView.svelte';
  import ChannelsView from './ChannelsView.svelte';
  import Page from './Page.svelte';

  let {
    id = $bindable()
  } = $props()
</script>

<Page>
  <ChannelsView width="33%" bind:id />
  <BookmarksView width="67%" />
</Page>
