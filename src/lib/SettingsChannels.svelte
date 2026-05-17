<script lang="ts">
  import strings from '../share/strings'
  import { Channels, channels, type Channel } from '../share/channels'
  import ButtonRemove from './ButtonRemove.svelte';

  type ChannelItem = {
    id: string
    channel: Channel
    isRemoved: boolean
  }

  let removed = $state(new Map<string, Channel>())

  let items: ChannelItem[] = $derived(
    [
      ...[...$channels].map(([id, channel]) => ({ id, channel, isRemoved: false })),
      ...[...removed].map(([id, channel]) => ({ id, channel, isRemoved: true }))
    ].sort((a, b) =>
      (a.channel.displayName || a.channel.name || '').localeCompare(b.channel.displayName || b.channel.name || '')
    )
  )
</script>

<div class="channels">
  {#if items.length}
    <ul class="channels__list">
      {#each items as item (item.id)}
        <li class="channels__list-item">
          <input
            class="channels__input"
            value={item.channel.displayName}
            placeholder={item.channel.name}
            onchange={(e) => {
              Channels.update(item.id, { displayName: e.currentTarget.value })
            }}
          >
          <ButtonRemove
            isRemoved={item.isRemoved}
            remove={() => {
              removed.set(item.id, item.channel)
              Channels.remove(item.id)
            }}
            restore={() => {
              removed.delete(item.id)
              Channels.addExisting(item.id, item.channel)
            }}
          />
        </li>
      {/each}
    </ul>
  {:else}
    <p class="channels__empty">{strings.noChannelsFound}</p>
  {/if}
</div>

<style lang="scss">
  .channels {
    display: grid;
    overflow-y: scroll;
    user-select: none;

    &__list {
      overflow-y: scroll;

      &-item {
        display: grid;
        grid-template-columns: 1fr auto;

        &:hover {
          background-color: var(--color-surface-light);
        }
      }
    }

    &__input {
      padding: 1rem;
      color: inherit;
      background: inherit;
      border: none;
      outline: none;
    }

    &__empty {
      align-self: center;
      justify-self: center;
      color: var(--color-fg-inactive);
    }
  }
</style>
