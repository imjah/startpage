<script lang="ts">
  import strings from '../strings.ts'
  import Channels from '../store/channels.ts'
  import InputButton from './InputButton.svelte'
  import InputText from './InputText.svelte'

  let valueId  = $state('')
</script>

<div>
  <InputText bind:value={valueId}  placeholder={strings.id} />
  <InputButton value={strings.add} onclick={() => Channels.set(valueId)} />
</div>
