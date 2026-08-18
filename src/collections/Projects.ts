import { CollectionConfig } from 'payload'
import { revalidateCollection } from '@/lib/revalidate'
import { formatSlugHook } from './fields/slug/formatSlug'

export const Projects: CollectionConfig = {
  hooks: {
    afterChange: [revalidateCollection],
  },
  slug: 'projects',
  labels: {
    singular: {
      en: 'Project',
      tr: 'İş',
    },
    plural: {
      en: 'Projects',
      tr: 'İşler',
    },
  },
  admin: {
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    // hidden: true,
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: {
        en: 'Slug',
        tr: 'Kısa İsim',
      },
      admin: {
        readOnly: true,
        hidden: true,
      },
      hooks: {
        beforeValidate: [formatSlugHook('title')],
      },
    },
    // ...slugField(),
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Title',
        tr: 'Başlık',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Description',
        tr: 'Açıklama',
      },
    },
    {
      name: 'solution',
      type: 'richText',
      label: {
        en: 'Solution',
        tr: 'Çözüm',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'before_image',
          type: 'upload',
          label: {
            en: 'Before Image',
            tr: 'Öncesi Görsel',
          },
          relationTo: 'media',
        },
        {
          name: 'after_image',
          type: 'upload',
          label: {
            en: 'After Image',
            tr: 'Sonrası Görsel',
          },
          relationTo: 'media',
        },
      ],
    },

    // {
    //   name: 'related_service',
    //   type: 'join',
    //   collection: 'services',
    //   on: 'related_projects',
    //   admin: {
    //     hidden: true,
    //   },
    //   label: {
    //     en: 'Related Service',
    //     tr: 'İlgili Hizmet',
    //   },
    // },
  ],
}
