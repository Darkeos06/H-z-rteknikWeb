import { Block } from 'payload'

export const HomeWhyChooseUsBlock: Block = {
  slug: 'why-choose-us',
  labels: {
    singular: {
      en: 'Why Choose Us Block',
      tr: 'Ana Sayfa Neden Biz Bloğu',
    },
    plural: {
      en: 'Why Choose Us Blocks',
      tr: 'Ana Sayfa Neden Biz Blokları',
    },
  },
  imageURL: '/screens/home-why-choose-us.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'why-choose-us',
      admin: {
        hidden: true,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: {
            en: 'Section Image',
            tr: 'Bölüm Görseli',
          },
          relationTo: 'media',
          admin: {
            width: '50%',
            description: {
              en: 'Recommended size: 571x971px',
              tr: 'Önerilen boyut: 571x971px',
            },
          },
        },
        {
          name: 'content',
          type: 'group',
          label: {
            en: 'Content',
            tr: 'İçerik',
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
                  en: 'Enter main title...',
                  tr: 'Ana başlığı girin...',
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
                  tr: 'Açıklama metnini girin...',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: {
        en: 'Features',
        tr: 'Özellikler',
      },
      labels: {
        singular: {
          en: 'Feature',
          tr: 'Özellik',
        },
        plural: {
          en: 'Features',
          tr: 'Özellikler',
        },
      },
      minRows: 1,
      maxRows: 4,
      admin: {
        description: {
          en: 'Add up to 4 features',
          tr: 'En fazla 4 özellik ekleyin',
        },
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Feature Title',
            tr: 'Özellik Başlığı',
          },
          admin: {
            placeholder: {
              en: 'Enter feature title...',
              tr: 'Özellik başlığını girin...',
            },
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: {
            en: 'Feature Description',
            tr: 'Özellik Açıklaması',
          },
          admin: {
            placeholder: {
              en: 'Enter feature description...',
              tr: 'Özellik açıklamasını girin...',
            },
          },
        },
        {
          name: 'icon',
          type: 'select',
          label: {
            en: 'Icon',
            tr: 'Özellik Simgesi',
          },
          defaultValue: '7-24-hizmet',
          options: [
            { label: '7/24 Hizmet', value: '7-24-hizmet' },
            { label: 'Sertifikalı Usta', value: 'sertifikali-usta' },
            { label: 'Profesyonel Uzmanlık', value: 'profesyonel-uzmanlik' },
            { label: 'Şeffaf Fiyatlandırma', value: 'seffaf-fiyatlandirma' },
            { label: 'İşçilik ve Malzeme Garantisi', value: 'iscilik-ve-malzeme-garantisi' },
            { label: '25 Yıllık Tecrübe', value: '25-yillik-tecrube' },
            { label: 'Memnuniyet Garantisi', value: 'memnuniyet-garantisi' },
          ],
        },
      ],
    },
  ],
}
