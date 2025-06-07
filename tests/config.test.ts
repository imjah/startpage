import { describe, it, expect,  beforeAll } from 'vitest'
import { Config, config } from '../src/share/config'

describe('Config', () => {
  it('Updates local storage after store update', () => {
    config.update(s => ({...s, sto_zlotych: 'bierz'}))

    expect(
      Config.get()
    ).toHaveProperty('sto_zlotych', 'bierz')
  })
})

beforeAll(() => {
  Config.saveOnUpdate()
})
