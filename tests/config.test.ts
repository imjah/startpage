import { assert, test } from 'vitest'
import { get } from 'svelte/store'
import { config, Config } from '../src/store/config'

test('Get config copy using <Config> class', () => {
  assert.deepStrictEqual(
    get(config),
    Config.get
  )
})

test('Get config from local storage', () => {
  const value = {
    foo: 'bar'
  }

  localStorage[Config.name] = JSON.stringify(value)

  assert.deepStrictEqual(
    value,
    Config.save
  )
})
 
test('Save config in local storage on change', () => {
  const value = 'bar'

  Config.saveOnChange()

  config.update(s => {
    s[value] = value
    return s
  })

  assert.strictEqual(
    value,
    JSON.parse(localStorage[Config.name] || '{}')[value]
  )
})
