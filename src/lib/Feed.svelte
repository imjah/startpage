<script lang="ts">
  import { onMount } from 'svelte'
  import type { Video } from './videos.ts'
  import { channels } from './channels.ts'
  import { videos } from './videos.ts'
  import { config } from './config.ts'

  function fetchVideos(channel: string) {
    fetch(`${$config.instance}/channel/${channel}`)
    .then(response => response.json())
    .then(response => response.relatedStreams.forEach((video: Video) => {
      videos.update(v => {
        v.push({
          url: video.url,
          title: video.title,
          uploaded: video.uploaded,
          uploaderUrl: video.uploaderUrl,
          uploaderName: video.uploaderName,
          uploadedDate: video.uploadedDate
        })

        return v
      })

      videos.update(v => {
        v.sort((a,b) => b.uploaded - a.uploaded)

        return v
      })
    }))
    .catch(error => console.log(error))

    localStorage.videosFetchedAt = Date.now()
  }

  function fetchVideosUsingCache(channel: string) {
    if (Date.now() < localStorage.videosFetchedAt + $config.cacheLifetime)
      return 0

    videos.set([])

    fetchVideos(channel)
  }

  onMount(() => {
    // channels.subscribe(() => {
    //   // TODO: update only added/removed channels
    //   videos.set([])

    //   $channels.forEach(channel => fetchVideos(channel))
    // })

    $channels.forEach(channel => fetchVideosUsingCache(channel))
  })
</script>

<section class="feed">
  <ul>
    {#each $videos.slice(0,50) as video}
      <li>
        <h3>
          <a href="https://youtube.com{video.url}">{video.title}</a>
        </h3>
        <p>
          <a href="https://youtube.com{video.uploaderUrl}">{video.uploaderName}</a>
          <span>{video.uploadedDate}</span>
        </p>
      </li>
    {/each}
  </ul>
</section>

<style>
  .feed {
    height: 80vh;
    overflow: scroll;
  }

  .feed ul {
    padding: 0;
    list-style: none;
  }

  .feed li {
    margin-bottom: 2em;
  }

  .feed h3 {
    margin: 0;
  }
</style>
