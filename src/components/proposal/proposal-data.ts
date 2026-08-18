import type { Proposal } from '@/payload-types'

export type ProposalWithDiscount = Proposal & {
  discountType?: 'percent' | 'amount' | null
  discountValue?: number | null
  pageEndSpacing?: number | null
}

export type ProposalDefaults = NonNullable<Proposal['companySnapshot']>
export type ProposalItem = NonNullable<Proposal['items']>[number]

export interface ProposalDocumentData {
  defaults: ProposalDefaults
  proposal: ProposalWithDiscount
  items: ProposalItem[]
}

export const initialDefaults: ProposalDefaults = {
  companyName: 'HIZIR TEKNİK TEKNİK SERVİS HİZMETLERİ',
  companySubtitle: 'Elektrik - Elektronik - Otomasyon - Mekanik - Isıtma - Soğutma',
  companyAddress: 'Şehit Osman Avcı Mh. 1404 Cd. Vera City 2/AG Eryaman, Etimesgut / ANKARA',
  companyPhone: '0532 775 12 50 / 0540 775 12 50',
  companyEmail: 'hizirteknik724@gmail.com',
  companyTaxOffice: 'Etimesgut Vergi Dairesi',
  companyTaxNumber: '982 005 43 22',
  validity: '10 GÜN',
  payment: 'Nakit / EFT / Havale',
  paymentMethod: 'Peşin / EFT / Havale',
  bankName: 'GARANTİ BANKASI',
  bankAccount: 'TR48 0006 2001 1980 0006 2942 11',
  generalTerms:
    'Fiyata %20 KDV dahil değildir.\nProforma fatura bilgi amaçlıdır, resmi belge yerine geçmez.\nFiyata malzeme, nakliye ve işçilik dahildir.',
  warrantyTerms:
    'Doğal afet ve mücbir sebepler hariç malzemelerimiz 2 yıl HIZIR TEKNİK garantisi altındadır.\nDoğal afet ve mücbir sebepler hariç işçiliğimiz 2 yıl HIZIR TEKNİK garantisi altındadır.\nMalzeme tedariği müşteriye ait olan işlerde, işin yapım esnasında veya tesliminden sonra malzemeden kaynaklı çıkabilecek sorunlarda servis ve onarım ücreti alınır.',
  contractorName: 'HIZIR TEKNİK',
}

export const initialProposal: ProposalWithDiscount = {
  id: 0,
  proposalDate: new Date().toISOString().split('T')[0],
  proposalNumber: '',
  status: 'draft',
  customerName: '',
  customerAddress: '',
  customerTaxOffice: '',
  customerTaxNumber: '',
  customerEmail: '',
  customerApprovalName: 'MÜŞTERİ / KURUM',
  subject: '',
  note: '',
  discountType: 'percent',
  discountValue: 0,
  taxPercent: 20,
  pageEndSpacing: 0,
  createdAt: '',
  updatedAt: '',
}

export const createItem = (description = '', quantity = '', unitPrice = ''): ProposalItem => ({
  id: crypto.randomUUID(),
  description,
  quantity,
  unitPrice,
})

export const initialItems: ProposalItem[] = [createItem(), createItem(), createItem()]

export const parseNumber = (value: string): number => {
  const n = Number(value.replace(/\./g, '').replace(',', '.').trim())
  return Number.isNaN(n) ? 0 : n
}

const currencyFormatter = new Intl.NumberFormat('tr-TR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const formatCurrency = (value: number) => currencyFormatter.format(value)

export const normalizeProposalDocumentData = (
  proposalDoc: ProposalWithDiscount,
): ProposalDocumentData => {
  const discountType = proposalDoc.discountType === 'amount' ? 'amount' : 'percent'
  const discountValue =
    proposalDoc.discountValue !== null && proposalDoc.discountValue !== undefined
      ? proposalDoc.discountValue
      : discountType === 'amount'
      ? proposalDoc.discountAmount ?? 0
      : proposalDoc.discountPercent ?? 0

  return {
    defaults: {
      companyName: proposalDoc.companySnapshot?.companyName || initialDefaults.companyName,
      companySubtitle:
        proposalDoc.companySnapshot?.companySubtitle || initialDefaults.companySubtitle,
      companyAddress: proposalDoc.companySnapshot?.companyAddress || initialDefaults.companyAddress,
      companyPhone: proposalDoc.companySnapshot?.companyPhone || initialDefaults.companyPhone,
      companyEmail: proposalDoc.companySnapshot?.companyEmail || initialDefaults.companyEmail,
      companyTaxOffice:
        proposalDoc.companySnapshot?.companyTaxOffice || initialDefaults.companyTaxOffice,
      companyTaxNumber:
        proposalDoc.companySnapshot?.companyTaxNumber || initialDefaults.companyTaxNumber,
      validity: proposalDoc.companySnapshot?.validity || initialDefaults.validity,
      payment: proposalDoc.companySnapshot?.payment || initialDefaults.payment,
      paymentMethod: proposalDoc.companySnapshot?.paymentMethod || initialDefaults.paymentMethod,
      bankName: proposalDoc.companySnapshot?.bankName || initialDefaults.bankName,
      bankAccount: proposalDoc.companySnapshot?.bankAccount || initialDefaults.bankAccount,
      generalTerms: proposalDoc.companySnapshot?.generalTerms || initialDefaults.generalTerms,
      warrantyTerms: proposalDoc.companySnapshot?.warrantyTerms || initialDefaults.warrantyTerms,
      contractorName: proposalDoc.companySnapshot?.contractorName || initialDefaults.contractorName,
    },
    proposal: {
      ...proposalDoc,
      proposalDate: proposalDoc.proposalDate || initialProposal.proposalDate,
      proposalNumber: proposalDoc.proposalNumber || '',
      customerName: proposalDoc.customerName || '',
      customerAddress: proposalDoc.customerAddress || '',
      customerTaxOffice: proposalDoc.customerTaxOffice || '',
      customerTaxNumber: proposalDoc.customerTaxNumber || '',
      customerEmail: proposalDoc.customerEmail || '',
      customerApprovalName:
        proposalDoc.customerApprovalName || initialProposal.customerApprovalName,
      subject: proposalDoc.subject || '',
      note: proposalDoc.note || '',
      discountType,
      discountValue,
      taxPercent: proposalDoc.taxPercent ?? 20,
      pageEndSpacing: proposalDoc.pageEndSpacing ?? 0,
    },
    items: proposalDoc.items?.map((item) => ({
      id: item.id || crypto.randomUUID(),
      description: item.description || '',
      quantity: item.quantity || '',
      unitPrice: item.unitPrice || '',
    })) || [createItem()],
  }
}
