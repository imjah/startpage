<script lang="ts">
  import strings from '../share/strings'
  import { config } from '../share/config'
  import InputNumber from './InputNumber.svelte';
  import InputSelect from './InputSelect.svelte';
</script>

<ul class="settings">
  <li class="setting">
    <InputSelect
      id={strings.instanceId}
      label={strings.instance}
      bind:use={$config.instance}
      bind:options={$config.instances} />
  </li>
  <li class="setting">
    <InputNumber
      id={strings.cacheId}
      label={strings.cache}
      min={0}
      bind:value={$config.cacheLifetimeInMinutes} />
  </li>
</ul>

<style>
  .settings {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .setting {
    display: flex;
    align-items: center;;
    justify-content: space-between;
    padding:.5rem 1rem;
  }

  .setting:hover {
    background-color: var(--color-bg);
  }
</style>
