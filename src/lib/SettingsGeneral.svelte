<script lang="ts">
  import { config } from '../store/config'
</script>

<div class="container">
  <ul class="settings">
    <li class="setting">
      <p>Instance: {$config.instance}</p>
    </li>
    <li class="setting">
      <p>Cache time: {$config.cacheLifetime / 1000}s</p>
    </li>
  </ul>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1rem;
    overflow-y: scroll;
  }

  .settings {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .setting {
    display: flex;
    justify-content: space-between;
    margin-bottom: .25rem;
  }
</style>
