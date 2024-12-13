<script lang="ts">
  import { Channels } from '../share/channels.ts'
  import strings from '../share/strings.ts'
  import InputSubmit from './InputSubmit.svelte'
  import InputText from './InputText.svelte'

  let value = $state('')
  let error = $state(false)
  let disabled = $state(false)

  let submit = (e: Event) => {
    e.preventDefault()

    if (!value.length) {
      error = true
      return
    }

    disabled = true

    Channels.set(value)
    .then(() => {
      value = ''
      error = false
      disabled = false
    })
    .catch(_ => {
      error = true
      disabled = false
    })
  }
</script>

<form onsubmit={submit}>
  <InputText bind:error={error} bind:value={value} placeholder={strings.youtubeChannelOrPlaylist} />
  <InputSubmit value={strings.add} {disabled} />
</form>
