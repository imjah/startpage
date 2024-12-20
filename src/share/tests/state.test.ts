import { describe, it, expect,  beforeAll } from 'vitest'
import { State, state } from '../state'

describe('State', () => {
  it('Updates local storage after store update', () => {
    state.update(s => ({...s, tak_pachnie: 'sto złotych'}))

    expect(
      State.get()
    ).toHaveProperty('tak_pachnie', 'sto złotych')
  })
})

beforeAll(() => {
  State.saveOnUpdate()
})
