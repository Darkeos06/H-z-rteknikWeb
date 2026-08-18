import { Block } from 'payload'

export const HomeBlogSectionBlock: Block = {
  slug: 'blog-section',
  labels: {
    singular: {
      en: 'Blog Section Block',
      tr: 'Ana Sayfa Blog Bölümü',
    },
    plural: {
      en: 'Blog Section Blocks',
      tr: 'Ana Sayfa Blog Bölümleri',
    },
  },
  imageURL: '/screens/home-blog.png',
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: 'blog-section',
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
            width: '100%',
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
      ],
    },
    {
      name: 'featuredPosts',
      type: 'relationship',
      label: {
        en: 'Featured Blog Posts',
        tr: 'Öne Çıkan Blog Yazıları',
      },
      relationTo: 'posts',
      hasMany: true,
      admin: {
        description: {
          en: 'Select blog posts to display in this section',
          tr: 'Bu bölümde gösterilecek blog yazılarını seçin. En az 3 yazı olmalıdır.',
        },
      },
      minRows: 3,
    },
  ],
}
