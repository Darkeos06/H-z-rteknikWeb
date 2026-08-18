import { Block } from 'payload'

export const HomeTestimonialsSectionBlock: Block = {
  slug: 'testimonials-section',
  labels: {
    singular: {
      en: 'Testimonials Section Block',
      tr: 'Ana Sayfa Müşteri Yorumları Bölümü',
    },
    plural: {
      en: 'Testimonials Section Blocks',
      tr: 'Ana Sayfa Müşteri Yorumları Bölümleri',
    },
  },
  imageURL: '/screens/home-testimonials.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'testimonials-section',
      admin: {
        hidden: true,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'header',
          type: 'group',
          label: {
            en: 'Header Content',
            tr: 'Üst Bölüm İçeriği',
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
                  en: 'Enter company name...',
                  tr: 'Firma adını girin...',
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
                  en: 'Enter section title...',
                  tr: 'Bölüm başlığını girin...',
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
                  en: 'Enter section description...',
                  tr: 'Bölüm açıklamasını girin...',
                },
              },
            },
          ],
        },
        {
          name: 'viewAllButton',
          type: 'group',
          label: {
            en: 'View All Button',
            tr: 'Tümünü Gör Bağlantısı',
          },
          admin: {
            width: '30%',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'Tüm Yorumlar',
              label: {
                en: 'Button Text',
                tr: 'Bağlantı Metni',
              },
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '/yorumlar',
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
      name: 'featuredTestimonials',
      type: 'relationship',
      label: {
        en: 'Featured Testimonials',
        tr: 'Öne Çıkan Yorumlar',
      },
      relationTo: 'testimonials',
      hasMany: true,
      admin: {
        description: {
          en: 'Select testimonials to display in this section',
          tr: 'Bu bölümde gösterilecek yorumları seçin',
        },
      },
      minRows: 2,
    },
  ],
}
