import { CollectionConfig } from 'payload'
import { formatSlugHook } from './fields/slug/formatSlug'
import { generatePreviewPath } from './hooks/generatePreviewPath'
import { getServerSideURL } from '@/lib/getURL'

export const ServiceCategories: CollectionConfig = {
  slug: 'service-categories',
  defaultPopulate: {
    content: false,
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      en: 'Service Category',
      tr: 'Hizmet Kategorisi',
    },
    plural: {
      en: 'Service Categories',
      tr: 'Hizmet Kategorileri',
    },
  },

  admin: {
    defaultColumns: ['title', 'description', '_status'],
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'service-categories',
        })

        return `${getServerSideURL()}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'service-categories',
      })

      return `${getServerSideURL()}${path}`
    },
    useAsTitle: 'title',
    // hidden: true,
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
        // readOnly: true,
        hidden: true,
      },
      hooks: {
        beforeValidate: [formatSlugHook('title')],
      },
    },
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
      name: 'icon',
      type: 'select',
      label: {
        en: 'Icon',
        tr: 'Simge',
      },
      options: [
        { label: 'Isıtma ve Soğutma', value: 'isitma-ve-sogutma' },
        { label: 'Elektrik Tesisat', value: 'elektrik-tesisat' },
        { label: 'Elektronik Tesisat', value: 'elektronik-tesisat' },
        { label: 'Sıhhi Tesisat', value: 'sihhi-tesisat' },
        { label: 'Çatı ve Cephe', value: 'cati-ve-cephe' },
        { label: 'Yapı İnşaatı', value: 'yapi-insaati' },
        { label: 'Havuz Sistemleri', value: 'havuz-sistemleri' },
        // { label: 'Bakım', value: 'bakim' },
        // { label: 'Boyama', value: 'boyama' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: {
        en: 'Content',
        tr: 'İçerik',
      },
    },
    {
      name: 'featured_image',
      type: 'upload',
      admin: {
        description: {
          en: 'Recommended: 404x660px',
          tr: 'Önerilen: 404x660px',
        },
        position: 'sidebar',
      },
      label: {
        en: 'Featured Image',
        tr: 'Öne Çıkan Görsel',
      },
      relationTo: 'media',
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 10000, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 10,
  },
}
