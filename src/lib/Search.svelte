<script lang="ts">
  import SearchInput from './SearchInput.svelte';

  let error = $state('')
  let results = $state([])
</script>

<search class="container">
  <SearchInput bind:results bind:error />

  {#if results.length}
    <div class="results">
      <ul>
        {#each results as {name}}
          <li>{name}</li>
        {/each}
      </ul>
    </div>
  {/if}
</search>

<style>
  .container {
    position: relative
  }

  .results {
    position: absolute;
    top: 100%;
    display: flex;
    width: 100%;
    min-height: 10rem;
    color: var(--color-surface-fg);
    background: var(--color-surface);
    overflow-y: scroll;
  }
</style>
