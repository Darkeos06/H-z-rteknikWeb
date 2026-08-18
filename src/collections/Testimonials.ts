import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: {
      en: 'Testimonial',
      tr: 'Referans',
    },
    plural: {
      en: 'Testimonials',
      tr: 'Referanslar',
    },
  },
  admin: {
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    // hidden: true,
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: {
        en: 'Name',
        tr: 'İsim',
      },
    },
    {
      name: 'profession',
      type: 'text',
      label: {
        en: 'Profession',
        tr: 'Meslek',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      label: {
        en: 'Photo',
        tr: 'Fotoğraf',
      },
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'textarea',
      label: {
        en: 'Content',
        tr: 'İçerik',
      },
    },
    {
      name: 'source',
      type: 'select',
      label: {
        en: 'Source',
        tr: 'Kaynak',
      },
      defaultValue: 'manual',
      options: [
        {
          label: { en: 'Static Testimonial', tr: 'Statik Referans' },
          value: 'manual',
        },
        {
          label: { en: 'Google Business', tr: 'Google Yorumu' },
          value: 'google',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'rating',
      type: 'number',
      label: {
        en: 'Rating',
        tr: 'Puan',
      },
      defaultValue: 5,
      min: 1,
      max: 5,
      admin: {
        position: 'sidebar',
        placeholder: '5',
      },
    },
    {
      name: 'reviewUrl',
      type: 'text',
      label: {
        en: 'Review URL',
        tr: 'Yorum Bağlantısı (URL)',
      },
      admin: {
        position: 'sidebar',
        description: {
          en: 'Link to the verified Google review',
          tr: 'Doğrulanmış Google yorumunun linki',
        },
      },
    },
  ],
}
