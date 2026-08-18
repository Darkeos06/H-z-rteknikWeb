import { Block } from 'payload'

export const PageHeroBlock: Block = {
  slug: 'page-hero-block',
  imageURL: '/screens/block-page-hero.png',
  labels: {
    singular: {
      en: 'Page Hero Block',
      tr: 'Sayfa İlk Aksiyon Bloğu',
    },
    plural: {
      en: 'Page Hero Blocks',
      tr: 'Sayfa İlk Aksiyon Blokları',
    },
  },
  fields: [
    {
      name: 'impact',
      type: 'select',
      label: {
        en: 'Impact Level',
        tr: 'Etkileşim Seviyesi',
      },
      defaultValue: 'HIGH',
      options: [
        {
          label: {
            en: 'High',
            tr: 'Yüksek',
          },
          value: 'HIGH',
        },
        {
          label: {
            en: 'Medium',
            tr: 'Orta',
          },
          value: 'MEDIUM',
        },
        {
          label: {
            en: 'Low',
            tr: 'Düşük',
          },
          value: 'LOW',
        },
      ],
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
          en: 'Enter hero title...',
          tr: 'Başlık giriniz...',
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
          en: 'Enter description...',
          tr: 'Açıklama giriniz...',
        },
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Background Image',
        tr: 'Arka Plan Görseli',
      },
      admin: {
        description: {
          en: 'Upload an image to be used as the background.',
          tr: 'Arka plan olarak kullanılacak bir görsel yükleyin.',
        },
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: {
        en: 'Image Alt Text',
        tr: 'Görsel Alt Metni',
      },
      admin: {
        placeholder: {
          en: 'Enter image alt text...',
          tr: 'Görsel alt metni giriniz...',
        },
      },
    },
  ],
}
