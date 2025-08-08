<script lang="ts">
  import strings from '../share/strings'
  import { Channels, channels } from '../share/channels'
  import { config } from '../share/config'
  import { app } from './state/app.svelte'
  import Empty from './Empty.svelte';
  import Image from './Image.svelte';

  let selected = $derived(
    $channels.get(app.filter)
  )

  let feed = $derived(
    Channels.toArray(
      selected === undefined ? $channels : [app.filter, selected]
    )
    .sort(Channels.BY_CHANNEL_DISPLAY_NAME)
    .sort(Channels.BY_UPLOADED)
    .slice(0, $config.feedLimit)
  )

  Channels.refetch()
</script>

{#if feed.length}
  <ul class="feed">
    {#each feed as video}
      {@const name = video.channelDisplayName || video.channelName}
      {@const videoUrl = $config.feedProtocolEnabledForVideos ? `${$config.feedProtocolName}:${video.url}` : video.url}
      {@const videoTitleUrl = $config.feedProtocolEnabledForVideosInTitles ? videoUrl : video.url}

      <li class="feed__item">
        <a
          class="feed__item-thumbnail"
          class:themed={$config.feedThumbnailThemed}
          href={videoUrl}
          tabindex="-1">
          <div class="feed__item-thumbnail-img">
            <Image
              src={video.thumbnail}
              alt={strings.thumbnail}
              loading="lazy"
              crossorigin="anonymous"
            />
          </div>
        </a>

        <h1 class="feed__item-name ellipsis">
          <a class="feed__item-name-url" href={videoTitleUrl} title={video.title}>
            {video.title}
          </a>
        </h1>

        <p class="feed__item-duration ellipsis">
          {video.duration}
        </p>

        <p class="feed__item-user ellipsis">
          <a href={video.channelUrl} title={name}>
            {name}
          </a>
        </p>

        <p class="feed__item-date ellipsis">
          {video.uploadedDate}
        </p>
      </li>
    {/each}
  </ul>
{:else}
  <Empty message={strings.noVideosFound} />
{/if}

<style lang="scss">
  @use 'scss/mixins' as *;
  @use 'scss/variables' as *;
  
  .feed {
    display: grid;
    gap: $gap-1;
    padding: $gap-0;
    padding-right: $gap-2;
    overflow-y: scroll;

    &__item {
      height: 5.875rem;
      display: grid;
      gap: $gap-1;
      grid-template-rows: 3lh 1fr 1fr;
      grid-template-columns: 10.5rem 1fr auto;
      grid-template-areas:
      't n n'
      't r r'
      't u d';

      &-thumbnail {
        grid-area: t;

        &-img {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }

        &.themed {
          position: relative;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--color-accent);
            opacity: 25%;
          }

          &:visited::after {
            background: var(--color-visited);
          }
        }

        &.themed &-img {
          filter: saturate(0);
        }
      }

      &-name {
        grid-area: n;
        font-size: .75rem;

        @include line-clamp(3);

        &-url:visited {
          color: var(--color-visited);
        }
      }

      &-user {
        grid-area: u;
      }

      &-date {
        grid-area: d;
      }

      &-duration {
        grid-area: r;
      }
    }
  }
</style>
