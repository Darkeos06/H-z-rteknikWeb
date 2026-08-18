import { Block } from 'payload'

export const PageGridSectionBlock: Block = {
  slug: 'grid-section-block',
  imageURL: '/screens/block-grid.png',
  labels: {
    singular: {
      en: 'Grid Section Block',
      tr: 'Sayfa Kart Listesi Bölümü Bloğu',
    },
    plural: {
      en: 'Grid Section Blocks',
      tr: 'Sayfa Kart Listesi Bölümü Blokları',
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
      defaultValue: 'Misyonumuz ve Değerlerimiz',
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
      defaultValue:
        '25 yıldır değişmeyen ilkelerimiz ve kalite standartlarımız ile hizmetinizdeyiz.',
      admin: {
        placeholder: {
          en: 'Enter section description...',
          tr: 'Bölüm açıklamasını giriniz...',
        },
      },
    },
    {
      name: 'text',
      type: 'richText',
      admin: {
        hidden: true,
      },
      label: {
        en: 'Section Text',
        tr: 'Bölüm Metni',
      },
    },
    {
      name: 'values',
      type: 'array',
      label: {
        en: 'Values',
        tr: 'Değerler',
      },
      labels: {
        singular: {
          en: 'Value',
          tr: 'Değer',
        },
        plural: {
          en: 'Values',
          tr: 'Değerler',
        },
      },
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Card Title',
            tr: 'Kart Başlığı',
          },
          admin: {
            placeholder: {
              en: 'Enter card title...',
              tr: 'Kart başlığını giriniz...',
            },
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: {
            en: 'Card Description',
            tr: 'Kart Açıklaması',
          },
          admin: {
            placeholder: {
              en: 'Enter card description...',
              tr: 'Kart açıklamasını giriniz...',
            },
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: {
            en: 'Card Content',
            tr: 'Kart İçeriği',
          },
        },
        {
          name: 'icon',
          type: 'select',
          hasMany: false,
          label: {
            en: 'Icon',
            tr: 'Simge',
          },
          options: [
            { label: '7/24 Hizmet', value: '7-24-hizmet' },
            { label: 'Sertifikalı Usta', value: 'sertifikali-usta' },
            { label: 'Profesyonel Uzmanlık', value: 'profesyonel-uzmanlik' },
            { label: 'Şeffaf Fiyatlandırma', value: 'seffaf-fiyatlandirma' },
            { label: 'İşçilik ve Malzeme Garantisi', value: 'iscilik-ve-malzeme-garantisi' },
            { label: '25 Yıllık Tecrübe', value: '25-yillik-tecrube' },
            { label: 'Memnuniyet Garantisi', value: 'memnuniyet-garantisi' },
            { label: 'E-Posta', value: 'email' },
            { label: 'Telefon', value: 'phone' },
            { label: 'Adres', value: 'address' },
          ],
        },
      ],
    },
  ],
}
