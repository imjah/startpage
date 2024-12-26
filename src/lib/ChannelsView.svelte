<script lang="ts">
  import { onMount } from 'svelte'
  import { Channels, channels } from '../share/channels'
  import { config } from '../share/config'
  import strings from '../share/strings'
  import Empty from './Empty.svelte'

  let {
    id = $bindable(),
    width = '100%'
  } = $props()

  let feed = $derived.by(() => {
    const selected = $channels.get(id)

    return Channels.toArray(
      selected === undefined ? $channels : [id, selected]
    )
    .sort(Channels.BY_UPLOADED)
    .slice(0, $config.feedLimit)
  })

  onMount(() => {
    Channels.refetch()
  })
</script>

<div class="container" style:flex-basis={width}>
  {#if feed.length}
    <ul>
      {#each feed as video}
        <li class="video">
          <h4 class="video-title">
            <a class="video-url" href={video.url}>{video.title}</a>
          </h4>
          <p class="video-description">
            <a class="video-uploader" href={video.channelUrl}>
              {video.channelDisplayName || video.channelName}
            </a>
            {video.uploadedDate}
          </p>
        </li>
      {/each}
    </ul>
  {:else}
    <Empty message={strings.noVideosFound} /> 
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
  }

  .container:focus {
    background-color: var(--color-bg-light);
    outline: none;
  }

  .video {
    margin-bottom: 2rem;
  }

  .video:last-child {
    margin-bottom: 0;
  }

  .video-title {
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .video-url:visited {
    color: var(--color-visited);
  }

  .video-description {
    display: flex;
  }

  .video-uploader {
    display: block;
    margin-right: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
