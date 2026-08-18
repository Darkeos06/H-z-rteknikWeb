import { Block } from 'payload'

export const HomeHeroBlock: Block = {
  slug: 'home-hero-section',
  labels: {
    singular: {
      en: 'Hero Block',
      tr: 'Ana Sayfa En Üst Bloğu',
    },
    plural: {
      en: 'Hero Blocks',
      tr: 'Ana Sayfa Hero Blokları',
    },
  },
  imageURL: '/screens/home-hero.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'home-hero',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'headingRotation',
      type: 'array',
      label: {
        en: 'Rotating Headlines',
        tr: 'Dönen Başlıklar',
      },
      admin: {
        description: {
          en: 'Add headlines that will rotate in the hero section',
          tr: 'Hero bölümünde dönecek başlıkları ekleyin',
        },
      },
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: {
          en: 'Headline',
          tr: 'Başlık',
        },
        plural: {
          en: 'Headlines',
          tr: 'Başlıklar',
        },
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: {
            en: 'Headline Text',
            tr: 'Başlık Metni',
          },
          admin: {
            placeholder: {
              en: 'Enter a headline...',
              tr: 'Bir başlık girin...',
            },
          },
        },
      ],
    },
    {
      name: 'subHeading',
      type: 'text',
      label: {
        en: 'Sub Heading',
        tr: 'Alt Başlık',
      },
      admin: {
        placeholder: {
          en: 'Enter sub heading...',
          tr: 'Alt başlık girin...',
        },
      },
    },

    {
      type: 'row',
      fields: [
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
              en: 'Enter description...',
              tr: 'Açıklama girin...',
            },
          },
        },
        {
          name: 'featuredServices',
          type: 'relationship',
          label: {
            en: 'Featured Services',
            tr: 'Öne Çıkan Hizmetler',
          },
          relationTo: 'services',
          hasMany: true,
          admin: {
            width: '50%',
            description: {
              en: 'Select services to display in the rotating list',
              tr: 'Dönen listede görüntülenecek hizmetleri seçin',
            },
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'servicesLink',
          type: 'group',
          label: {
            en: 'Services Link',
            tr: 'Hizmetler Linki',
          },
          admin: {
            width: '50%',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  defaultValue: 'Tüm Hizmetler',
                  label: {
                    en: 'Link Text',
                    tr: 'Link Metni',
                  },
                  admin: {
                    width: '50%',
                    placeholder: {
                      en: 'Enter link text...',
                      tr: 'Link metni girin...',
                    },
                  },
                },
                {
                  name: 'url',
                  type: 'text',
                  defaultValue: '/hizmetlerimiz',
                  label: {
                    en: 'URL',
                    tr: 'URL',
                  },
                  admin: {
                    width: '50%',
                    placeholder: {
                      en: 'Enter URL...',
                      tr: 'URL girin...',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'images',
          type: 'group',
          label: {
            en: 'Hero Images',
            tr: 'Hero Görselleri',
          },
          admin: {
            width: '50%',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'mainImage',
                  type: 'upload',
                  label: {
                    en: 'Main Image',
                    tr: 'Ana Görsel',
                  },
                  relationTo: 'media',
                  admin: {
                    width: '50%',
                    description: {
                      en: 'Recommended: 404x660px',
                      tr: 'Önerilen: 404x660px',
                    },
                  },
                },
                {
                  name: 'secondaryImage',
                  type: 'upload',
                  label: {
                    en: 'Secondary Image',
                    tr: 'İkincil Görsel',
                  },
                  relationTo: 'media',
                  admin: {
                    width: '50%',
                    description: {
                      en: 'Recommended: 269x439px',
                      tr: 'Önerilen: 269x439px',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'cta_form',
      type: 'relationship',
      label: {
        en: 'Cta Form',
        tr: 'Keşif Formu',
      },
      relationTo: 'forms',
    },
  ],
}
