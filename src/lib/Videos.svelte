<script lang="ts">
  import Channels from '../store/channels.ts'

  let { width = '100%' } = $props()
  let { store } = Channels
</script>

<ul class="feed" style:flex-basis={width}>
  {#each $store as [id, channels]}
    {#each channels.videos as video}
  <li class="feed-item">
    <h3 class="feed-item-title">
      <a href="https://youtube.com{video.url}">{video.title}</a>
    </h3>
    <p class="feed-item-description">
      <a href="https://youtube.com{video.uploaderUrl}" class="feed-item-channel-name">{video.uploaderName}</a>
      {video.uploadedDate}
    </p>
  </li>
    {/each}
  {/each}
</ul>

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

  ul {
    padding: 0;
    list-style: none;
  }

  ul, li, h3, p {
    margin: 0;
  }
</style>
