import { test, expect } from 'vitest'
import { Channels } from '../src/share/channels'

const t = test.extend({
  url: 'myUrl',
  channel: {
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

t('toArray(Map<URL, Channel>) returns ChannelVideo[]', ({url, channel}) => {
  const actual = Channels.toArray(new Map([[url, channel]]))

  expect(actual).toEqual(
    [
      {
        ...channel.videos[0],
        channelUrl: url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      },
      {
        ...channel.videos[1],
        channelUrl: url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      }
    ]
  )
})

t('toArray([URL, Channel]) returns ChannelVideo[]', ({url, channel}) => {
  const actual = Channels.toArray([url, channel])

  expect(actual).toEqual(
    [
      {
        ...channel.videos[0],
        channelUrl: url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      },
      {
        ...channel.videos[1],
        channelUrl: url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      }
    ]
  )
})

t('BY_UPLOADED sorts ChannelVideo[] by <uploaded> descending', ({url, channel}) => {
  const actual = Channels.toArray([url, channel]).sort(Channels.BY_UPLOADED)

  expect(actual).toEqual(
    [
      {
        ...channel.videos[1],
        channelUrl: url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      },
      {
        ...channel.videos[0],
        channelUrl: url,
        channelName: channel.name,
        channelDisplayName: channel.displayName
      }
    ]
  )
})
