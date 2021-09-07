export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
