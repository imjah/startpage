<script lang="ts">
  import strings from '../share/strings'
  import { Channels, channels } from '../share/channels'
  import ButtonRemove from './ButtonRemove.svelte';

  let channelsSortedByName = $derived([...$channels].sort(Channels.BY_NAME))
</script>

<div class="channels">
  {#if $channels.size}
    <ul class="channels__list">
      {#each channelsSortedByName as [id, channel]}
        <li class="channels__list-item">
          <input
            class="channels__input"
            bind:value={channel.displayName}
            placeholder={channel.name}
          >
          <ButtonRemove remove={() => Channels.remove(id)} />
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
