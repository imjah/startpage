import { assert, test } from 'vitest'
import { get } from 'svelte/store'
import { channels, create, type Channel } from '../src/store/channels.ts'

/**
 * @vitest-environment jsdom
 */
 
test('Add channel to the store', () => {
  const channel: Channel = {
    'id': 'UCCT_JGIn9I9FS6OTzzqWEew',
    'name': 'Robert Makłowicz'
  }

  create(channel)

  assert.deepStrictEqual(get(channels).pop(), channel)
})
