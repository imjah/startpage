<script lang="ts">
  import strings from '../strings.ts'
  import Channels from '../store/channels.ts'
  import InputButton from './InputButton.svelte'
  import InputText from './InputText.svelte'

  let value  = $state('')
  let disabled = $state(false)

  let handle = async () => {
    disabled = true

    Channels.set(value)
    .then(() => {
      disabled = false
    })
  }
</script>

<div>
  <InputText bind:value={value}  placeholder={strings.id} />
  <InputButton value={strings.add} onclick={handle} {disabled} />
</div>
