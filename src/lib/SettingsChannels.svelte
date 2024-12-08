<script lang="ts">
  import strings from '../strings'
  import Channels from '../store/channels'
  import SettingsRemoveButton from './SettingsRemoveButton.svelte';

  let { store } = Channels
  let modified: string[] = $state([])
  let setModified = (id: string) => modified.find(v => v == id) || modified.push(id)
  let unsetModified = (id: string) => modified = modified.filter(v => v != id)
</script>

<div class="container">
  {#if $store.size}
    <ul class="settings">
      {#each $store as [id, {name, displayName}]}
        <li class="setting">
          <div class="fit">
            <input
              type="text"
              class="setting-name"
              class:modified={modified.includes(id)}
              value={displayName || name}
              placeholder={name}
              oninput={_ => setModified(id)}
              onkeyup={e => e.key == 'Enter' && unsetModified(id) && Channels.update(id, {displayName: e.target.value})}>
          </div>
          <SettingsRemoveButton remove={() => Channels.delete(id)} />
        </li>
      {/each}
    </ul>

    {#if modified.length}
      <p class="hint">Press enter to save channel name</p>
    {/if}
  {:else}
    <p class="no-channels">{strings.noChannelsFound}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: scroll;
  }

  .container:has(.no-channels) {
    align-items: center;
    justify-content: center;
  }

  .no-channels {
    color: var(--color-fg-inactive);
    user-select: none;
  }

  .settings {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: auto;
    overflow-y: scroll;
  }

  .container:has(.hint) .settings {
    padding-bottom: 0;
  }

  .fit {
    display: grid;
    width: 100%;
  }

  .setting {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: .5rem;
  }

  .setting:last-child {
    margin-bottom: 0;
  }

  .setting:hover {
    background-color: var(--color-bg);
  }

  .setting-name {
    padding: 1rem;
    color: inherit;
    background-color: inherit;
    border: none;
    outline: none;
  }

  .setting-name.modified {
    color: var(--color-warrning);
  }

  .hint {
    padding: 1rem;
    color: var(--color-fg-inactive);
  }
</style>
