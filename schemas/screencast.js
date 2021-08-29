export default {
  name: 'screencast',
  title: 'Screencast',
  type: 'document',
  fields: [
    {
      name: 'vimeoVideo',
      title: 'Vimeo Video',
      type: 'vimeo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'blurb'
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`,
    //   })
    // },
  },
}
