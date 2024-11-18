<script lang="ts">
  // import { onMount } from 'svelte'
  // import { channels } from '../store/channels.ts'
  // import { config } from '../store/config.ts'
  // import { videos, type Video } from '../store/videos.ts'

  // function fetchVideos(channel: string) {
  //   fetch(`${$config.instance}/channel/${channel}`)
  //   .then(response => response.json())
  //   .then(response => response.relatedStreams.forEach((video: Video) => {
  //     videos.update(v => {
  //       v.push({
  //         url: video.url,
  //         title: video.title,
  //         uploaded: video.uploaded,
  //         uploaderUrl: video.uploaderUrl,
  //         uploaderName: video.uploaderName,
  //         uploadedDate: video.uploadedDate
  //       })

  //       return v
  //     })

  //     videos.update(v => {
  //       v.sort((a,b) => b.uploaded - a.uploaded)

  //       return v
  //     })
  //   }))
  //   .catch(error => console.log(error))

  //   localStorage.videosFetchedAt = Date.now()
  // }

  // function fetchVideosUsingCache(channel: string) {
  //   if (Date.now() < localStorage.videosFetchedAt + $config.cacheLifetime)
  //     return 0

  //   videos.set([])

  //   fetchVideos(channel)
  // }

  // onMount(() => {
  //   // channels.subscribe(() => {
  //   //   // TODO: update only added/removed channels
  //   //   videos.set([])

  //   //   $channels.forEach(channel => fetchVideos(channel))
  //   // })

  //   $channels.forEach(channel => fetchVideosUsingCache(channel))
  // })

  let { width = '100%' } = $props()
  let urlMaxWidth = '200px'

  const videos = [
    {'url': 'url', 'uploaderUrl': 'uploaderUrl', 'uploaderName': 'uploaderName','uploadedDate': 'uploadedDate', 'title': 'title'},
    {'url': 'url', 'uploaderUrl': 'uploaderUrl', 'uploaderName': 'uploaderName','uploadedDate': 'uploadedDate', 'title': 'title'},
  ]
</script>

<ul class="feed" style:flex-basis={width}>
  {#each videos as video}
  <li class="feed-item">
    <h2 class="feed-item-title">
      <a href="https://youtube.com/{video.url}">{video.title}</a>
    </h2>
    <p class="feed-item-description">
      <a href="https://youtube.com/{video.uploaderUrl}" class="feed-item-channel-name">{video.uploaderName}</a>
      {video.uploadedDate}
    </p>
  </li>
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

  ul, li, h2, p {
    margin: 0;
  }
</style>
