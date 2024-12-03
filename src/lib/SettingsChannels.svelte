<script lang="ts">
  import strings from '../strings'
  import Channels from '../store/channels'

  let { store } = Channels
  let modified: string[] = $state([])
  let setModified = (id: string) => modified.find(v => v == id) || modified.push(id)
  let unsetModified = (id: string) => modified = modified.filter(v => v != id)
</script>

<div class="container">
  {#if $store.size}
    <ul class="settings">
      {#each $store as [id, {name}]}
        <li class="setting">
          <div class="fit">
            <input
              type="text"
              class="setting-name"
              class:modified={modified.includes(id)}
              value={name}
              placeholder={name}
              oninput={_ => setModified(id)}
              onkeyup={e => e.key == 'Enter' && unsetModified(id) && Channels.update(id, {name: e.target.value})}>
          </div>
          <input
            type="button"
            class="setting-remove"
            value={strings.remove}
            onclick={() => Channels.delete(id)}>
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
    padding: 1rem;
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
  }

  .fit {
    display: grid;
    width: 100%;
  }

  .setting {
    display: flex;
    justify-content: space-between;
  }

  .setting-name {
    margin: .5rem 0;
    padding: 0;
    color: inherit;
    background-color: inherit;
    border: none;
    outline: none;
  }

  .setting-name.modified {
    color: var(--color-warrning);
  }

  .setting-remove {
    color: var(--color-accent);
    background-color: var(--color-bg-light);
    border: none;
    outline: none;
    cursor: pointer;
  }

  .hint {
    padding: .5rem 0;
    color: var(--color-fg-inactive);
  }
</style>
