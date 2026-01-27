export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Published Date',
      type: 'string',
      description: 'Format: Dec 29, 2025',
    },
    {
      name: 'readingTime',
      title: 'Reading Time',
      type: 'string',
      description: 'Example: 12 min read',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'meta',
      title: 'Meta Info (SEO)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 3 },
      ],
    },
    {
      name: 'content',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'paragraph',
          title: 'Paragraph',
          fields: [{ name: 'text', type: 'text', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'heading',
          title: 'Heading',
          fields: [{ name: 'text', type: 'string', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'list',
          title: 'List',
          fields: [{ name: 'items', type: 'array', of: [{ type: 'string' }], title: 'Items' }],
        },
        {
          type: 'object',
          name: 'quote',
          title: 'Quote',
          fields: [{ name: 'text', type: 'text', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'tip',
          title: 'Tip',
          fields: [{ name: 'text', type: 'text', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'code',
          title: 'Code Block',
          fields: [
            { name: 'code', type: 'text', title: 'Code' },
            { name: 'language', type: 'string', title: 'Language' },
          ],
        },
      ],
    },
  ],
};
