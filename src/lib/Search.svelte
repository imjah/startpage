<script lang="ts">
  import Closeable from './Closeable.svelte';
import SearchInput from './SearchInput.svelte';
  import SearchSuggestions from './SearchSuggestions.svelte';

  let isOpen = $state(false)
  let error = $state('')
  let suggestions = $state([])
</script>

<Closeable bind:open={isOpen}>
  <search class="relative">
    <SearchInput bind:suggestions bind:error bind:isOpen />

    {#if isOpen}
      <SearchSuggestions bind:suggestions />
    {/if}
  </search>
</Closeable>
