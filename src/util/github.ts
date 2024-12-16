import config from '../config'

export let redirectIfGithubPages404PageSetRedirectPath = (route: Function) => {
  if (localStorage[config.GH_PAGES_REDIRECT] == undefined)
    return

  route(localStorage[config.GH_PAGES_REDIRECT])

  localStorage.removeItem(config.GH_PAGES_REDIRECT)
}
