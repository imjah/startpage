<script lang="ts">
  import strings from '../strings.ts'
  import InputButton from './InputButton.svelte'
  import InputText from './InputText.svelte'

  let valueUrl  = $state('')
  let valueTag  = $state('')
  let valueName = $state('')
</script>

<div>
  <InputText bind:value={valueUrl}  placeholder={strings.url} />
  <InputText bind:value={valueTag}  placeholder={strings.tag} />
  <InputText bind:value={valueName} placeholder={strings.name} />
  <InputButton value={strings.add} />
</div>
