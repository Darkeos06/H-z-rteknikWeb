import { CollectionConfig } from 'payload'

export const BlogComments: CollectionConfig = {
  slug: 'blog-comments',
  labels: {
    singular: {
      en: 'Comment',
      tr: 'Yorum',
    },
    plural: {
      en: 'Comments',
      tr: 'Yorumlar',
    },
  },
  admin: {
    group: {
      en: 'Blog',
      tr: 'Blog',
    },
    hidden: true,
    useAsTitle: 'commenterName',
    defaultColumns: ['commenterName', 'post', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'post',
      type: 'relationship',
      label: {
        en: 'Related Post',
        tr: 'İlgili Yazı',
      },
      relationTo: 'posts',
    },
    {
      name: 'parent',
      type: 'relationship',
      label: {
        en: 'Parent Comment',
        tr: 'Üst Yorum',
      },
      relationTo: 'blog-comments',
      admin: {
        description: {
          en: 'If this is a reply to another comment',
          tr: 'Eğer bu bir yorum yanıtı ise',
        },
      },
    },
    {
      name: 'commenterName',
      type: 'text',
      label: {
        en: 'Name',
        tr: 'İsim',
      },
      admin: {
        placeholder: {
          en: 'Enter your name',
          tr: 'İsminizi giriniz',
        },
      },
    },
    {
      name: 'commenterEmail',
      type: 'email',
      label: {
        en: 'Email',
        tr: 'E-posta',
      },
      admin: {
        placeholder: {
          en: 'Enter your email',
          tr: 'E-posta adresinizi giriniz',
        },
      },
    },
    {
      name: 'content',
      type: 'textarea',
      label: {
        en: 'Comment',
        tr: 'Yorum',
      },
      admin: {
        placeholder: {
          en: 'Enter your comment',
          tr: 'Yorumunuzu giriniz',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      label: {
        en: 'Status',
        tr: 'Durum',
      },
      options: [
        {
          label: {
            en: 'Pending',
            tr: 'Beklemede',
          },
          value: 'pending',
        },
        {
          label: {
            en: 'Approved',
            tr: 'Onaylandı',
          },
          value: 'approved',
        },
        {
          label: {
            en: 'Spam',
            tr: 'Spam',
          },
          value: 'spam',
        },
        {
          label: {
            en: 'Rejected',
            tr: 'Reddedildi',
          },
          value: 'rejected',
        },
      ],
    },
    {
      name: 'moderationNotes',
      type: 'textarea',
      label: {
        en: 'Moderation Notes',
        tr: 'Moderasyon Notları',
      },
      admin: {
        description: {
          en: 'Internal notes for moderation (not visible to public)',
          tr: 'Moderasyon için dahili notlar (herkese açık değil)',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'isNotified',
      type: 'checkbox',
      label: {
        en: 'Email Notification Sent',
        tr: 'E-posta Bildirimi Gönderildi',
      },
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: {
          en: 'Whether the commenter has been notified about the status',
          tr: 'Yorum sahibine durum hakkında bildirim gönderilip gönderilmediği',
        },
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: {
        en: 'IP Address',
        tr: 'IP Adresi',
      },
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      label: {
        en: 'User Agent',
        tr: 'Tarayıcı Bilgisi',
      },
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
  timestamps: true, // Adds createdAt and updatedAt fields
  hooks: {
    beforeChange: [
      // You might want to add hooks for:
      // - Spam checking
      // - Notification sending
      // - IP address and user agent capturing
    ],
  },
}
