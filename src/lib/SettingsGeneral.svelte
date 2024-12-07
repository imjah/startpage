<script lang="ts">
  import strings from '../strings'
  import { config } from '../store/config'
  import SettingsSelectButton from './SettingsSelectButton.svelte';
</script>

<div class="container">
  <ul class="settings">
    <li class="setting">
      <SettingsSelectButton
        id={strings.instanceId}
        label={strings.instance}
        bind:use={$config.instance}
        bind:options={$config.instances} />
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
