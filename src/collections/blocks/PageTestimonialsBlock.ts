import { Block } from 'payload'

export const PageTestimonialsBlock: Block = {
  slug: 'testimonials-block',
  imageURL: '/screens/block-testimonials.png',
  labels: {
    singular: {
      en: 'Page Testimonials Block',
      tr: 'Sayfa Yorumlar Bloğu',
    },
    plural: {
      en: 'Page Testimonials Blocks',
      tr: 'Sayfa Yorumlar Blokları',
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
      defaultValue: 'Müşterilerimiz Ne Diyor?',
      admin: {
        placeholder: {
          en: 'Enter section title...',
          tr: 'Bölüm başlığını giriniz...',
        },
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Section Description',
        tr: 'Bölüm Açıklaması',
      },
      defaultValue: 'Memnun müşterilerimizin yorumları bizim için en büyük motivasyon.',
      admin: {
        placeholder: {
          en: 'Enter section description...',
          tr: 'Bölüm açıklamasını giriniz...',
        },
      },
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      label: {
        en: 'Testimonials',
        tr: 'Yorumlar',
      },
      admin: {
        description: {
          en: 'Select testimonials to display in this section.',
          tr: 'Bu bölümde gösterilecek yorumları seçin.',
        },
      },
    },
  ],
}
