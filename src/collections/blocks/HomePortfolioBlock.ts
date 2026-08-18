import { Block } from 'payload'

export const HomePortfolioSectionBlock: Block = {
  slug: 'portfolio-section',
  labels: {
    singular: {
      en: 'Portfolio Section Block',
      tr: 'Ana Sayfa Portfolyo Bölümü Bloğu',
    },
    plural: {
      en: 'Portfolio Section Blocks',
      tr: 'Ana Sayfa Portfolyo Bölümü Blokları',
    },
  },
  imageURL: '/screens/home-portfolio.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'portfolio-section',
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
            width: '50%',
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
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: {
            en: 'Description',
            tr: 'Açıklama',
          },
          admin: {
            width: '50%',
            placeholder: {
              en: 'Enter section description...',
              tr: 'Bölüm açıklamasını girin...',
            },
          },
        },
      ],
    },
    {
      name: 'featuredProjects',
      type: 'relationship',
      label: {
        en: 'Featured Projects',
        tr: 'Öne Çıkan Projeler',
      },
      relationTo: 'projects',
      hasMany: true,
      minRows: 2,
      admin: {
        description: {
          en: 'Select projects to showcase (minimum 2)',
          tr: 'Gösterilecek projeleri seçin (en az 2)',
        },
      },
    },
  ],
}
