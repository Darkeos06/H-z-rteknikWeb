import { Block } from 'payload'

export const HomeWorkProcessBlock: Block = {
  slug: 'work-process',
  labels: {
    singular: {
      en: 'Work Process Block',
      tr: 'Ana Sayfa Çalışma Süreci Bloğu',
    },
    plural: {
      en: 'Work Process Blocks',
      tr: 'Ana Sayfa Çalışma Süreci Blokları',
    },
  },
  imageURL: '/screens/home-work-process.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'work-process',
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
      name: 'processSteps',
      type: 'array',
      label: {
        en: 'Process Steps',
        tr: 'Süreç Adımları',
      },
      labels: {
        singular: {
          en: 'Process Step',
          tr: 'Süreç Adımı',
        },
        plural: {
          en: 'Process Steps',
          tr: 'Süreç Adımları',
        },
      },
      minRows: 1,
      maxRows: 3,
      admin: {
        description: {
          en: 'Add up to 3 process steps',
          tr: 'En fazla 3 süreç adımı ekleyin',
        },
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'number',
              type: 'number',
              label: {
                en: 'Step Number',
                tr: 'Adım Numarası',
              },
              admin: {
                width: '30%',
                placeholder: {
                  en: 'Enter step number...',
                  tr: 'Adım numarasını girin...',
                },
              },
              min: 1,
              max: 3,
            },
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'Step Title',
                tr: 'Adım Başlığı',
              },
              admin: {
                width: '70%',
                placeholder: {
                  en: 'Enter step title...',
                  tr: 'Adım başlığını girin...',
                },
              },
            },
          ],
        },
        {
          name: 'steps',
          type: 'array',
          label: {
            en: 'Sub Steps',
            tr: 'Alt Adımlar',
          },
          minRows: 1,
          maxRows: 5,
          admin: {
            description: {
              en: 'Add up to 5 sub-steps',
              tr: 'En fazla 5 alt adım ekleyin',
            },
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: {
                en: 'Step Description',
                tr: 'Adım Açıklaması',
              },
              admin: {
                placeholder: {
                  en: 'Enter step description...',
                  tr: 'Adım açıklamasını girin...',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
