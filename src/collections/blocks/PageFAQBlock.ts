import { Block } from 'payload'

export const PageFAQBlock: Block = {
  slug: 'faq-block',
  imageURL: '/screens/block-faq.png',
  labels: {
    singular: {
      en: 'Page FAQ Block',
      tr: 'Sayfa Sık Sorulan Sorular Bloğu',
    },
    plural: {
      en: 'Page FAQ Blocks',
      tr: 'Sayfa Sık Sorulan Sorular Blokları',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Section Title',
        tr: 'Bölüm Başlığı',
      },
      defaultValue: 'Sıkça Sorulan Sorular',
      admin: {
        placeholder: {
          en: 'Enter section title...',
          tr: 'Bölüm başlığını giriniz...',
        },
      },
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: {
        en: 'Section Subtitle',
        tr: 'Bölüm Alt Başlığı',
      },
      defaultValue: 'Hizmetlerimiz hakkında merak edilenler.',
      admin: {
        placeholder: {
          en: 'Enter section subtitle...',
          tr: 'Bölüm alt başlığını giriniz...',
        },
      },
    },
    {
      name: 'variant',
      type: 'select',
      label: {
        en: 'Style Variant',
        tr: 'ArkaPlan Biçimi',
      },
      defaultValue: 'light',
      options: [
        {
          label: {
            en: 'Subtle',
            tr: 'Hafif Açık',
          },
          value: 'subtle',
        },
        {
          label: {
            en: 'Light',
            tr: 'Açık',
          },
          value: 'light',
        },
        {
          label: {
            en: 'Dark',
            tr: 'Koyu',
          },
          value: 'dark',
        },
        {
          label: {
            en: 'Primary',
            tr: 'Kırmızı',
          },
          value: 'primary',
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      label: {
        en: 'FAQs',
        tr: 'Sık Sorulan Sorular',
      },
      labels: {
        singular: {
          en: 'FAQ',
          tr: 'Soru',
        },
        plural: {
          en: 'FAQs',
          tr: 'Sorular',
        },
      },
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: {
            en: 'Question',
            tr: 'Soru',
          },
          admin: {
            placeholder: {
              en: 'Enter question...',
              tr: 'Soruyu giriniz...',
            },
          },
        },
        {
          name: 'answer',
          type: 'textarea',
          label: {
            en: 'Answer',
            tr: 'Cevap',
          },
          admin: {
            placeholder: {
              en: 'Enter answer...',
              tr: 'Cevabı giriniz...',
            },
          },
        },
      ],
    },
  ],
}
