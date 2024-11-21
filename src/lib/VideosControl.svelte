<script lang="ts">
  import strings from '../strings.ts'
  import Channels from '../store/channels.ts'
  import InputButton from './InputButton.svelte'
  import InputText from './InputText.svelte'

  let value  = $state('')
  let error = $state(false)
  let disabled = $state(false)

  let submit = (e) => {
    e.preventDefault()

    if (!value.length) {
      error = true
      return
    }

    disabled = true

    Channels.set(value)
    .then(() => {
      error = false
      disabled = false
    })
    .catch(e => {
      error = true
      disabled = false
    })
  }
</script>

<form onsubmit={submit}>
  <InputText bind:error={error} bind:value={value}  placeholder={strings.youtubeChannelId} />
  <InputButton value={strings.add} {disabled} />
</form>
