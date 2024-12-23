import { describe, it, expect,  beforeAll } from 'vitest'
import { Status, status } from '../status'

describe('Status', () => {
  it('Updates local storage after store update', () => {
    status.update(s => ({...s, tak_pachnie: 'sto złotych'}))

    expect(
      Status.get()
    ).toHaveProperty('tak_pachnie', 'sto złotych')
  })
})

beforeAll(() => {
  Status.saveOnUpdate()
})
