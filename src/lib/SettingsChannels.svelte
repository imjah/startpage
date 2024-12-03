<script lang="ts">
  import strings from '../strings'
  import Channels from '../store/channels'

  let { store } = Channels
</script>

<ul class="settings">
  {#each $store as [id, channel]}
    <li class="settings-item">
      {channel.name}
      <button onclick={() => {Channels.delete(id)}}>{strings.remove}</button>
    </li>
  {/each}
</ul>

<style>
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
