import { CollectionConfig } from 'payload'

const isAuthenticated = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const Proposals: CollectionConfig = {
  slug: 'proposals',
  labels: {
    singular: { en: 'Proposal', tr: 'Teklif' },
    plural: { en: 'Proposals', tr: 'Teklifler' },
  },
  admin: {
    group: { en: 'Business', tr: 'İş Yönetimi' },
    useAsTitle: 'proposalNumber',
    defaultColumns: ['proposalNumber', 'proposalDate', 'customerName', 'grandTotal', 'status'],
  },
  access: {
    create: isAuthenticated,
    read: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  fields: [
    {
      name: 'proposalNumber',
      type: 'text',
      required: true,
      label: { en: 'Proposal Number', tr: 'Teklif No' },
    },
    {
      name: 'proposalType',
      type: 'select',
      label: { en: 'Proposal Type', tr: 'Teklif Türü' },
      options: [
        { label: 'Proforma', value: 'proforma' },
        { label: 'Teklif', value: 'teklif' },
        { label: 'Sipariş', value: 'siparis' },
      ],
    },
    {
      name: 'proposalDate',
      type: 'text',
      label: { en: 'Date', tr: 'Tarih' },
    },
    {
      name: 'status',
      type: 'select',
      label: { en: 'Status', tr: 'Durum' },
      defaultValue: 'draft',
      options: [
        { label: { en: 'Draft', tr: 'Taslak' }, value: 'draft' },
        { label: { en: 'Submitted', tr: 'Gönderildi' }, value: 'submitted' },
        { label: { en: 'Accepted', tr: 'Kabul Edildi' }, value: 'accepted' },
        { label: { en: 'Rejected', tr: 'Reddedildi' }, value: 'rejected' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'discountPercent',
      type: 'number',
      label: { en: 'Discount (%)', tr: 'İskonto (%)' },
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
    {
      name: 'discountType',
      type: 'select',
      label: { en: 'Discount Type', tr: 'İskonto Türü' },
      defaultValue: 'percent',
      options: [
        { label: { en: 'Percent', tr: 'Yüzde' }, value: 'percent' },
        { label: { en: 'Amount', tr: 'Tutar' }, value: 'amount' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'discountValue',
      type: 'number',
      label: { en: 'Discount Value', tr: 'İskonto Değeri' },
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
    {
      name: 'taxPercent',
      type: 'number',
      label: { en: 'Tax / KDV (%)', tr: 'KDV (%)' },
      defaultValue: 20,
      admin: { position: 'sidebar' },
    },
    {
      name: 'pageEndSpacing',
      type: 'number',
      label: { en: 'Page End Spacing (px)', tr: 'Sayfa Sonu Boşluğu (px)' },
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
    {
      name: 'shareToken',
      type: 'text',
      label: { en: 'Share Token', tr: 'Paylaşım Token' },
      admin: { position: 'sidebar', readOnly: true },
      index: true,
    },
    {
      name: 'shareTokenExpiry',
      type: 'text',
      label: { en: 'Share Token Expiry', tr: 'Token Geçerlilik Tarihi' },
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'discountAmount',
      type: 'number',
      label: { en: 'Discount Amount (₺)', tr: 'İskonto Tutarı (₺)' },
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'taxAmount',
      type: 'number',
      label: { en: 'Tax Amount (₺)', tr: 'KDV Tutarı (₺)' },
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'grandTotal',
      type: 'number',
      label: { en: 'Grand Total (₺)', tr: 'Genel Toplam (₺)' },
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: { en: 'Customer Info', tr: 'Müşteri Bilgileri' },
          fields: [
            {
              name: 'customerName',
              type: 'text',
              label: { en: 'Customer Name', tr: 'Müşteri' },
            },
            {
              name: 'customerAddress',
              type: 'text',
              label: { en: 'Customer Address', tr: 'Müşteri Adresi' },
            },
            {
              name: 'customerTaxOffice',
              type: 'text',
              label: { en: 'Tax Office', tr: 'Vergi Dairesi' },
            },
            {
              name: 'customerTaxNumber',
              type: 'text',
              label: { en: 'Tax No', tr: 'Vergi No' },
            },
            {
              name: 'customerEmail',
              type: 'text',
              label: { en: 'Email', tr: 'E-posta' },
            },
            {
              name: 'customerApprovalName',
              type: 'text',
              label: { en: 'Customer Approval Name', tr: 'Müşteri / Kurum Onayı' },
            },
            {
              name: 'subject',
              type: 'text',
              label: { en: 'Subject', tr: 'Konu' },
            },
          ],
        },
        {
          label: { en: 'Items', tr: 'Kalemler' },
          fields: [
            {
              name: 'items',
              type: 'array',
              label: { en: 'Items', tr: 'Kalemler' },
              fields: [
                {
                  name: 'description',
                  type: 'text',
                  label: { en: 'Description', tr: 'Malzeme / Hizmet' },
                },
                {
                  name: 'quantity',
                  type: 'text',
                  label: { en: 'Quantity', tr: 'Adet/MT' },
                },
                {
                  name: 'unitPrice',
                  type: 'text',
                  label: { en: 'Unit Price', tr: 'Br. Fiyat' },
                },
                {
                  name: 'total',
                  type: 'number',
                  label: { en: 'Total', tr: 'Tutar' },
                  admin: { readOnly: true },
                },
              ],
            },
            {
              name: 'note',
              type: 'textarea',
              label: { en: 'Note', tr: 'Not' },
            },
          ],
        },
        {
          label: { en: 'Company Snapshot', tr: 'Firma Bilgileri (Anlık)' },
          fields: [
            {
              name: 'companySnapshot',
              type: 'group',
              label: {
                en: 'Company Info at Time of Creation',
                tr: 'Oluşturulduğundaki Firma Bilgileri',
              },
              fields: [
                {
                  name: 'companyName',
                  type: 'text',
                  label: { en: 'Company Name', tr: 'Firma Adı' },
                },
                {
                  name: 'companySubtitle',
                  type: 'text',
                  label: { en: 'Subtitle', tr: 'Alt Başlık' },
                },
                { name: 'companyAddress', type: 'text', label: { en: 'Address', tr: 'Adres' } },
                { name: 'companyPhone', type: 'text', label: { en: 'Phone', tr: 'Telefon' } },
                { name: 'companyEmail', type: 'text', label: { en: 'Email', tr: 'E-posta' } },
                {
                  name: 'companyTaxOffice',
                  type: 'text',
                  label: { en: 'Tax Office', tr: 'Vergi Dairesi' },
                },
                { name: 'companyTaxNumber', type: 'text', label: { en: 'Tax No', tr: 'Vergi No' } },
                { name: 'validity', type: 'text', label: { en: 'Validity', tr: 'Teklif Süresi' } },
                { name: 'payment', type: 'text', label: { en: 'Payment', tr: 'Ödeme' } },
                {
                  name: 'paymentMethod',
                  type: 'text',
                  label: { en: 'Payment Method', tr: 'Ödeme Şekli' },
                },
                { name: 'bankName', type: 'text', label: { en: 'Bank', tr: 'Banka' } },
                { name: 'bankAccount', type: 'text', label: { en: 'IBAN', tr: 'IBAN' } },
                {
                  name: 'generalTerms',
                  type: 'textarea',
                  label: { en: 'General Terms', tr: 'Genel Açıklamalar' },
                },
                {
                  name: 'warrantyTerms',
                  type: 'textarea',
                  label: { en: 'Warranty Terms', tr: 'Garanti Koşulları' },
                },
                {
                  name: 'contractorName',
                  type: 'text',
                  label: { en: 'Contractor', tr: 'Teklif Veren' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
