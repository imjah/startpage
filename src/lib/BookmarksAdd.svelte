<script lang="ts">
  import bookmarks from '../share/bookmarks'
  import strings from '../share/strings'
  import InputSubmit from './InputSubmit.svelte'
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

    bookmarks.set({url: url, tag: tag, name: name})

    url = tag = name = ''
  }
</script>

<form onsubmit={submit}>
  <InputText bind:error={errorUrl}  bind:value={url}  placeholder={strings.url} />
  <InputText bind:error={errorTag}  bind:value={tag}  placeholder={strings.tag} />
  <InputText bind:error={errorName} bind:value={name} placeholder={strings.name} />
  <InputSubmit value={strings.add} />
</form>
