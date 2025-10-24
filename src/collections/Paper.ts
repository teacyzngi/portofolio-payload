import { CollectionConfig } from 'payload';

export const Papers: CollectionConfig = {
  slug: 'papers',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'authors',
      type: 'text',
    },
    {
      name: 'abstract',
      type: 'textarea',
    },
    {
      name: 'publicationDate',
      type: 'date',
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
