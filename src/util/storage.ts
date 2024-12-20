export class LocalStorage {
  static ls_name() {
    /* NOTE: LS_NAME is a child attribute */

    if (this.LS_NAME === undefined)
      throw new Error(`LS_NAME for ${this.name} is undefined`)

    return this.LS_NAME
  }

  static get() {
    if (localStorage[this.ls_name()] == undefined)
      return

    try {
      return JSON.parse(localStorage[this.ls_name()])
    }
    catch (e) {
      if (e instanceof SyntaxError)
        console.error(`Failed to parse ${this.name} local storage`)
      else
        throw e
    }
  }

  static set(serializable: any) {
    localStorage[this.ls_name()] = JSON.stringify(serializable)
  }
}
