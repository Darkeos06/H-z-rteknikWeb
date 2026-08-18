import { Block } from 'payload'

export const PageCTABlock: Block = {
  slug: 'cta-block',
  imageURL: '/screens/block-banner.png',
  labels: {
    singular: {
      en: 'Page Banner Block',
      tr: 'Sayfa Banner Bloğu',
    },
    plural: {
      en: 'Page Banner Blocks',
      tr: 'Sayfa Banner Blokları',
    },
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: {
        en: 'Heading',
        tr: 'Başlık',
      },
      defaultValue: 'Sorununuz için Bize Ulaşın',
      admin: {
        placeholder: {
          en: 'Enter heading...',
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
      defaultValue:
        'Her türlü tamirat, tadilat ve teknik destek ihtiyacınız için 7/24 hizmetinizdeyiz.',
      admin: {
        placeholder: {
          en: 'Enter description...',
          tr: 'Açıklama giriniz...',
        },
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      label: {
        en: 'Button Text',
        tr: 'Bağlantı Metni',
      },
      defaultValue: 'Bizimle İletişime Geçin',
      admin: {
        placeholder: {
          en: 'Enter button text...',
          tr: 'Bağlantı metni giriniz...',
        },
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: {
        en: 'Button Link',
        tr: 'Bağlantı Linki',
      },
      defaultValue: '/iletisim',
      admin: {
        placeholder: {
          en: 'Enter button link...',
          tr: 'Bağlantı linki giriniz...',
        },
      },
    },
  ],
}
