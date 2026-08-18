import { Block } from 'payload'

export const PageProjectsBlock: Block = {
  slug: 'projects-block',
  imageURL: '/screens/block-projects.png',
  labels: {
    singular: {
      en: 'Page Projects Block',
      tr: 'Sayfa Projeler Bloğu',
    },
    plural: {
      en: 'Page Projects Blocks',
      tr: 'Sayfa Projeler Blokları',
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
      defaultValue: 'Örnek Projelerimiz',
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
      defaultValue: 'Başarıyla tamamladığımız projelerden örnekler.',
      admin: {
        placeholder: {
          en: 'Enter section description...',
          tr: 'Bölüm açıklamasını giriniz...',
        },
      },
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      label: {
        en: 'Projects',
        tr: 'Projeler',
      },
      admin: {
        description: {
          en: 'Select projects to display in this section.',
          tr: 'Bu bölümde gösterilecek projeleri seçin.',
        },
      },
    },
  ],
}
