<script lang="ts">
  import channels from '../share/channels'
  import strings from '../share/strings'

  let { id = $bindable(), width = '100%' } = $props()
  let { store } = channels

  let videos = $derived.by(() => {
    let c = $store.get(id)

    return c
      ? c.videos.map(v => ({...v, uploaderName: c.displayName || c.name}))
      : Array.from($store.values()).flatMap(
          channel => channel.videos.map(v => ({...v, uploaderName: channel.displayName || channel.name}))
        ).sort((a,b) => b.uploaded - a.uploaded)
  })
</script>

<div class="container" style:flex-basis={width}>
{#if videos.length}
  <ul>
    {#each videos as video}
    <li class="video">
      <h4 class="video-title">
        <a class="video-url" href={`https://youtube.com${video.url}`}>{video.title}</a>
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
  .container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow-y: scroll;
  }

  .container:focus {
    background-color: var(--color-bg-light);
    outline: none;
  }

  .container:has(.no-videos) {
    align-items: center;
    justify-content: center;
  }

  .no-videos {
    color: var(--color-fg-inactive);
    user-select: none;
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
