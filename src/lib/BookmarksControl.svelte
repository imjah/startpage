<script lang="ts">
  import strings from '../strings'
  import Bookmarks from '../store/bookmarks'
  import InputButton from './InputButton.svelte'
  import InputText from './InputText.svelte'

  let url  = $state('')
  let tag  = $state('')
  let name = $state('')
  let errorUrl  = $state(false)
  let errorTag  = $state(false)
  let errorName = $state(false)

  let submit = (e: Event) => {
    e.preventDefault()

    errorUrl = errorTag = errorName = false

    if (!url.length)
      errorUrl = true

    if (!tag.length)
      errorTag = true

    if (!name.length)
      errorName = true

    if (errorUrl || errorTag || errorName)
      return

    Bookmarks.set({url: url, tag: tag, name: name})

    url = tag = name = ''
  }
</script>

<form onsubmit={submit}>
  <InputText bind:error={errorUrl}  bind:value={url}  placeholder={strings.url} />
  <InputText bind:error={errorTag}  bind:value={tag}  placeholder={strings.tag} />
  <InputText bind:error={errorName} bind:value={name} placeholder={strings.name} />
  <InputButton value={strings.add} />
</form>
