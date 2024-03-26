export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'article',
      type: 'string',
      title: 'Article',
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
