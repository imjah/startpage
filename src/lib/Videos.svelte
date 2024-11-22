<script lang="ts">
  import Channels from '../store/channels.ts'
  import { type Video } from '../store/channels.ts'

  let { current = $bindable(), width = '100%' } = $props()
  let { store } = Channels

  let videos = $derived(
    $store.get(current)?.videos || Array.from($store.values()).flatMap(
      channel => channel.videos
    ).sort((a,b) => b.uploaded - a.uploaded)
  )
</script>

<div class="container" style:flex-basis={width}>
{#if videos.length}
  <ul>
    {#each videos as video}
    <li class="video">
      <h4 class="video-title">
        <a href={`https://youtube.com${video.url}`}>{video.title}</a>
      </h4>
      <p class="video-description">
        <a class="video-uploader" href={`https://youtube.com${video.uploaderUrl}`}>{video.uploaderName}</a>
        {video.uploadedDate}
      </p>
    </li>
    {/each}
  </ul>
{:else}
  <p class="no-videos">{strings.noVideosFound}</p>
{/if}
</div>

<style>
  .feed {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow-y: scroll;
  }

  .feed-item {
    margin-bottom: 2rem;
  }

  .feed-item:last-child {
    margin-bottom: 0;
  }

  .feed-item-title {
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .feed-item-description {
    display: flex;
  }

  .feed-item-channel-name {
    display: block;
    margin-right: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
