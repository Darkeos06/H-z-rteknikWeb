import { CollectionConfig } from 'payload'
import { HomeHeroBlock } from './blocks/HomeHeroBlock'
import { HomeServicesCarouselBlock } from './blocks/HomeServicesCarouselBlocks'
import { HomeAboutSectionBlock } from './blocks/HomeAboutBlock'
import { HomeWhyChooseUsBlock } from './blocks/HomeWhyChooseUsBlock'
import { HomeWorkProcessBlock } from './blocks/HomeWorkProcessBlock'
import { HomePortfolioSectionBlock } from './blocks/HomePortfolioBlock'
import { HomeTestimonialsSectionBlock } from './blocks/HomeTestimonialsBlock'
import { HomeBlogSectionBlock } from './blocks/HomeBlogSectionBlock'
import { PageHeroBlock } from './blocks/PageHeroBlock'
import { PageCTABlock } from './blocks/PageCTABlock'
import { PageGridSectionBlock } from './blocks/PageGridSectionBlock'
import { PageCertificationsBlock } from './blocks/PageCertificationsBlock'
import { PageFAQBlock } from './blocks/PageFAQBlock'
import { generatePreviewPath } from './hooks/generatePreviewPath'
import { getServerSideURL } from '@/lib/getURL'
import { formatSlugHook } from './fields/slug/formatSlug'
import { PageRichTextBlock } from './blocks/PageRichTextBlok'
import { PageProjectsBlock } from './blocks/PageProjectsBlock'
import { PageTestimonialsBlock } from './blocks/PageTestimonialsBlock'
import { PageImageGalleryBlock } from './blocks/PageGalleryBlock'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { FormBlock } from '@/components/blocks/Form/config'
import { revalidateCollection } from '@/lib/revalidate'

export const Pages: CollectionConfig = {
  hooks: {
    afterChange: [revalidateCollection],
  },
  slug: 'pages',
  access: {
    read: () => true, // Allow public read access
  },
  labels: {
    singular: {
      en: 'Page',
      tr: 'Sayfa',
    },
    plural: {
      en: 'Pages',
      tr: 'Sayfalar',
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
          collection: 'pages',
        })

        return `${getServerSideURL()}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
      })

      return `${getServerSideURL()}${path}`
    },
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
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'General',
            tr: 'Genel',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
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
              admin: {
                hidden: true,
              },
              relationTo: 'media',
            },
          ],
        },
        {
          label: {
            en: 'Content',
            tr: 'İçerik',
          },
          admin: {
            // condition: (data) => data?.slug !== 'ana-sayfa',
          },
          fields: [
            {
              name: 'blocks',
              label: {
                en: 'Content Blocks',
                tr: 'İçerik Bölümleri',
              },
              type: 'blocks',
              labels: {
                singular: {
                  en: 'Content Block',
                  tr: 'İçerik Bölümü',
                },
                plural: {
                  en: 'Content Blocks',
                  tr: 'İçerik Bölümleri',
                },
              },
              minRows: 1,
              maxRows: 20,
              blocks: [
                HomeHeroBlock,
                HomeServicesCarouselBlock,
                HomeAboutSectionBlock,
                HomeWhyChooseUsBlock,
                HomeWorkProcessBlock,
                HomePortfolioSectionBlock,
                HomeTestimonialsSectionBlock,
                HomeBlogSectionBlock,
                PageHeroBlock,
                PageCTABlock,
                PageGridSectionBlock,
                PageCertificationsBlock,
                PageImageGalleryBlock,
                PageFAQBlock,
                PageRichTextBlock,
                PageProjectsBlock,
                PageTestimonialsBlock,
                FormBlock,
              ],
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
