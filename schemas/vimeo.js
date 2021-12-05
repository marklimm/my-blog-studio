import React from 'react'

import Vimeo from '@u-wave/react-vimeo'
import getVideoId from 'get-video-id'


const VimeoPreview = (props) => {
  const { value } = props
  
  if (!value.url) {
    return null
  }

  const { id } = getVideoId(value.url)

  return (
    <Vimeo video={id} />
  )
}

// This vimeo embed allows for vimeo videos to be placed within the `blockContent` type
 export default {
  title: 'Vimeo embed',
  name: 'vimeo',
  type: 'object',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Vimeo video URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: VimeoPreview
  }
}
