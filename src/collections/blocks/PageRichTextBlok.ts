import { Block } from 'payload'

export const PageRichTextBlock: Block = {
  slug: 'rich-text-block',
  imageURL: '/screens/block-richtext.png',
  labels: {
    singular: {
      en: 'Rich Text Block',
      tr: 'Zengin Metin Bloğu',
    },
    plural: {
      en: 'Rich Text Blocks',
      tr: 'Zengin Metin Blokları',
    },
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: {
        en: 'Content',
        tr: 'İçerik',
      },
      required: true,
    },
  ],
}
