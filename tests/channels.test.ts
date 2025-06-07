import { test, expect } from 'vitest'
import { Channels } from '../src/share/channels'

const t = test.extend({
  id: 'myId',
  channel: {
    url: 'https://my.url/myId',
    name: 'myChannelName',
    displayName: 'myChannelDisplayName',
    videos: [
      {
        url: 'myVideoUrl',
        title: 'myVideoUrl',
        uploaded: 2137,
        uploadedDate: 'myUploadedDate'
      },
      {
        url: 'mySecondVideoUrl',
        title: 'mySecondVideoUrl',
        uploaded: 2138,
        uploadedDate: 'mySecondUploadedDate'
      }
    ]
  }
})

t('toArray(Map<URL, Channel>) returns ChannelVideo[]', ({id, channel}) => {
  const actual = Channels.toArray(new Map([[id, channel]]))

  expect(actual).toEqual(
    [
      {
        ...channel.videos[0],
        channelUrl: channel.url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      },
      {
        ...channel.videos[1],
        channelUrl: channel.url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      }
    ]
  )
})

t('toArray([URL, Channel]) returns ChannelVideo[]', ({id, channel}) => {
  const actual = Channels.toArray([id, channel])

  expect(actual).toEqual(
    [
      {
        ...channel.videos[0],
        channelUrl: channel.url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      },
      {
        ...channel.videos[1],
        channelUrl: channel.url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      }
    ]
  )
})

t('BY_UPLOADED sorts ChannelVideo[] by <uploaded> descending', ({id, channel}) => {
  const actual = Channels.toArray([id, channel]).sort(Channels.BY_UPLOADED)

  expect(actual).toEqual(
    [
      {
        ...channel.videos[1],
        channelUrl: channel.url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      },
      {
        ...channel.videos[0],
        channelUrl: channel.url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      }
    ]
  )
})
