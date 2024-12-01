<script lang="ts">
  import strings from '../strings'
  import Channels from '../store/channels'

  let { store } = Channels
</script>

<div class="container">
  <ul class="tabs">
    <li class="tab focus">{strings.channels}</li>
  </ul>
  <ul class="settings">
    {#each $store as [id, channel]}
      <li class="settings-item">
        {channel.name}
        <button onclick={() => {Channels.delete(id)}}>{strings.remove}</button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    display: flex;
  }

  .tab {
    flex-grow: 1;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
  }

  .tab.focus {
    color: var(--color-fg);
    background-color: var(--color-accent);
  }

  .settings-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 0;
  }

  button {
    color: var(--color-accent);
    background-color: var(--color-bg-light);
    border: none;
    cursor: pointer;
  }
</style>
