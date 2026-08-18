import { CollectionConfig } from 'payload'
import { formatSlugHook } from './fields/slug/formatSlug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { generatePreviewPath } from './hooks/generatePreviewPath'
import { getServerSideURL } from '@/lib/getURL'
import { revalidateCollection } from '@/lib/revalidate'

export const Posts: CollectionConfig = {
  hooks: {
    afterChange: [revalidateCollection],
  },
  slug: 'posts',
  access: {
    read: () => true, // Allow public read access
  },
  labels: {
    singular: {
      en: 'Post',
      tr: 'Blog Yazısı',
    },
    plural: {
      en: 'Posts',
      tr: 'Blog Yazıları',
    },
  },
  admin: {
    defaultColumns: ['title', 'post_category', 'author', 'createdAt'],
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'posts',
        })

        return `${getServerSideURL()}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
      })

      return `${getServerSideURL()}${path}`
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Content',
            tr: 'İçerik',
          },
          fields: [
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
          ],
        },
        {
          name: 'meta',
          label: 'Seo',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    {
      name: 'featured_image',
      type: 'upload',
      label: {
        en: 'Featured Image',
        tr: 'Öne Çıkan Görsel',
      },
      relationTo: 'media',
      admin: {
        description: {
          en: 'Recommended: 404x660px',
          tr: 'Önerilen: 404x660px',
        },
        position: 'sidebar',
      },
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
      name: 'post_category',
      type: 'relationship',
      label: {
        en: 'Category',
        tr: 'Kategori',
      },
      relationTo: 'post-categories',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'related_service_category',
      type: 'relationship',
      label: {
        en: 'Related Service Category',
        tr: 'İlgili Hizmet Kategorisi',
      },
      admin: {
        position: 'sidebar',
      },
      relationTo: 'service-categories',
      filterOptions: () => {
        return {
          _status: {
            equals: 'published',
          },
        }
      },
    },
    {
      name: 'author',
      type: 'relationship',
      label: {
        en: 'Author',
        tr: 'Yazar',
      },
      relationTo: 'authors',
      admin: {
        position: 'sidebar',
      },
    },
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
