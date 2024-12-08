<script lang="ts">
  import strings from '../strings'
  import { config } from '../store/config'
  import SettingsNumberInput from './SettingsNumberInput.svelte';
  import SettingsSelectInput from './SettingsSelectInput.svelte';
</script>

<div class="container">
  <ul class="settings">
    <li class="setting">
      <SettingsSelectInput
        id={strings.instanceId}
        label={strings.instance}
        bind:use={$config.instance}
        bind:options={$config.instances} />
    </li>
    <li class="setting">
      <SettingsNumberInput
        id={strings.cacheId}
        label={strings.cache}
        min={0}
        bind:value={$config.cacheLifetimeInMinutes} />
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
    align-items: center;;
    justify-content: space-between;
    padding: .5rem;
  }

  .setting:hover {
    background-color: var(--color-bg);
  }
</style>
