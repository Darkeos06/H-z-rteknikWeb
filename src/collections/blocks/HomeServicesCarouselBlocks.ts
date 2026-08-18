import { Block } from 'payload'

export const HomeServicesCarouselBlock: Block = {
  slug: 'services-carousel',
  labels: {
    singular: {
      en: 'Services Carousel Block',
      tr: 'Ana Sayfa Hizmetler Kart Listesi',
    },
    plural: {
      en: 'Services Carousel Blocks',
      tr: 'Ana Sayfa Hizmetler Kart Listesi',
    },
  },
  imageURL: '/screens/home-our-services.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'services-carousel',
      admin: {
        hidden: true,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'heading',
          type: 'group',
          label: {
            en: 'Section Heading',
            tr: 'Bölüm Başlığı',
          },
          admin: {
            width: '70%',
          },
          fields: [
            {
              name: 'subtitle',
              type: 'text',
              label: {
                en: 'Subtitle',
                tr: 'Alt Başlık',
              },
              admin: {
                placeholder: {
                  en: 'Enter subtitle...',
                  tr: 'Alt başlık girin...',
                },
              },
            },
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'Title',
                tr: 'Başlık',
              },
              admin: {
                placeholder: {
                  en: 'Enter main title...',
                  tr: 'Ana başlık girin...',
                },
              },
            },
          ],
        },
        {
          name: 'viewAllLink',
          type: 'group',
          label: {
            en: 'View All Link',
            tr: '"Tümünü Gör" Bağlantısı',
          },
          admin: {
            width: '30%',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'Tüm Hizmetler',
              label: {
                en: 'Link Text',
                tr: 'Bağlantı Metni',
              },
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '/hizmetlerimiz',
              label: {
                en: 'URL',
                tr: 'Bağlantı Yolu',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'services',
      type: 'relationship',
      label: {
        en: 'Services',
        tr: 'Hizmet Kategorileri',
      },
      relationTo: 'service-categories',
      filterOptions: () => {
        return {
          _status: {
            equals: 'published',
          },
        }
      },
      hasMany: true,
      admin: {
        description: {
          en: 'Select services to display in the carousel',
          tr: 'Listede gösterilecek hizmet kategorileri seçin',
        },
      },
    },
  ],
}
