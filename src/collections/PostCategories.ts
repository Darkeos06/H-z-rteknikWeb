import { CollectionConfig } from 'payload'
import { formatSlugHook } from './fields/slug/formatSlug'
import { generatePreviewPath } from './hooks/generatePreviewPath'
import { getServerSideURL } from '@/lib/getURL'

export const PostCategories: CollectionConfig = {
  slug: 'post-categories',
  access: {
    read: () => true, // Allow public read access
  },
  labels: {
    singular: {
      en: 'Post Category',
      tr: 'Blog Kategorisi',
    },
    plural: {
      en: 'Post Categories',
      tr: 'Blog Kategorileri',
    },
  },
  admin: {
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'post-categories',
        })

        return `${getServerSideURL()}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'post-categories',
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
        readOnly: true,
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
      name: 'featured_image',
      type: 'upload',
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
