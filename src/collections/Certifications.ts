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

export const Certifications: CollectionConfig = {
  hooks: {
    afterChange: [revalidateCollection],
  },
  slug: 'certifications',
  access: {
    read: () => true, // Allow public read access
  },
  labels: {
    singular: {
      en: 'Certification',
      tr: 'Sertifika',
    },
    plural: {
      en: 'Certifications',
      tr: 'Sertifikalar',
    },
  },
  admin: {
    defaultColumns: ['title', 'date', 'updatedAt', '_status'],
    group: {
      en: 'Content',
      tr: 'İçerik',
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'Url Bağlantısı',
      admin: {
        readOnly: true,
        hidden: true,
      },
      hooks: {
        beforeValidate: [formatSlugHook('title')],
      },
    },
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
              required: true,
              label: {
                en: 'Certificate Title',
                tr: 'Sertifika Başlığı',
              },
              admin: {
                placeholder: {
                  en: 'Enter certificate title...',
                  tr: 'Sertifika başlığını giriniz...',
                },
              },
            },
            {
              name: 'date',
              type: 'text',
              label: {
                en: 'Certificate Date',
                tr: 'Sertifika Tarihi',
              },
              admin: {
                placeholder: {
                  en: 'e.g., 2023',
                  tr: 'örn., 2023',
                },
                description: {
                  en: 'Year or date the certification was issued',
                  tr: 'Sertifikanın verildiği yıl veya tarih',
                },
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: {
                en: 'Description',
                tr: 'Açıklama',
              },
              admin: {
                placeholder: {
                  en: 'Enter certificate description...',
                  tr: 'Sertifika açıklamasını giriniz...',
                },
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        en: 'Certificate Image',
        tr: 'Sertifika Görseli',
      },
      admin: {
        position: 'sidebar',
        description: {
          en: 'Upload the certificate image (recommended: at least 800x1000px)',
          tr: 'Sertifika görselini yükleyin (önerilen: en az 800x1000px)',
        },
      },
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Certificate PDF',
        tr: 'Sertifika PDF',
      },
      admin: {
        position: 'sidebar',
        description: {
          en: 'Optional: Upload the certificate as PDF for download',
          tr: 'Opsiyonel: İndirilebilir PDF sertifika yükleyin',
        },
      },
      filterOptions: {
        mimeType: { contains: 'pdf' },
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: {
        en: 'Featured Certificate',
        tr: 'Öne Çıkan Sertifika',
      },
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: {
          en: 'Show this certificate prominently',
          tr: 'Bu sertifikayı öne çıkar',
        },
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 10000,
      },
    },
    maxPerDoc: 10,
  },
}
