'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProposalDocument } from '@/components/proposal/proposal-document'
import {
  type ProposalDocumentData,
  type ProposalItem,
  type ProposalWithDiscount,
  createItem,
  formatCurrency,
  parseNumber,
} from '@/components/proposal/proposal-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Building2,
  CheckCircle2,
  FileText,
  Loader2,
  Printer,
  RefreshCw,
  Save,
  Settings,
  StickyNote,
  User,
} from 'lucide-react'
import { ProposalShareButton } from '@/components/proposal/proposal-share-button'

interface ProposalEditorProps {
  initialData: ProposalDocumentData
  proposalId: number
  initialStatus: 'draft' | 'submitted' | 'accepted' | 'rejected'
}

const statusConfig = {
  draft: 'Taslak',
  submitted: 'Gönderildi',
  accepted: 'Kabul Edildi',
  rejected: 'Reddedildi',
} as const

type ProposalTypeValue = 'proforma' | 'teklif' | 'siparis'

const FormField = ({
  label,
  id,
  value,
  onChange,
  multiline = false,
  rows = 3,
  type = 'text',
}: {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  multiline?: boolean
  rows?: number
  type?: string
}) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-medium text-gray-600">
        {label}
      </Label>
      {multiline ? (
        <Textarea
          id={id}
          value={value}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm"
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-card text-sm"
        />
      )}
    </div>
  )
}

export const ProposalEditor = ({ initialData, proposalId, initialStatus }: ProposalEditorProps) => {
  const router = useRouter()
  const [defaults, setDefaults] = useState(initialData.defaults)
  const [proposal, setProposal] = useState<ProposalWithDiscount>(initialData.proposal)
  const [items, setItems] = useState<ProposalItem[]>(initialData.items)
  const [status, setStatus] = useState(initialStatus)
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isLoadingDefaults, setIsLoadingDefaults] = useState(false)
  const [settingsSaveState, setSettingsSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>(
    'idle',
  )

  const calculatedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        total: parseNumber(item.quantity) * parseNumber(item.unitPrice),
      })),
    [items],
  )

  const subtotal = useMemo(
    () => calculatedItems.reduce((sum, item) => sum + item.total, 0),
    [calculatedItems],
  )

  const discountVal = parseNumber(String(proposal.discountValue ?? 0))
  const taxPct = parseNumber(String(proposal.taxPercent ?? 0))
  const discountAmount = useMemo(() => {
    if (proposal.discountType === 'percent') return subtotal * (discountVal / 100)
    return Math.min(discountVal, subtotal)
  }, [discountVal, proposal.discountType, subtotal])
  const discountPct = useMemo(
    () => (subtotal > 0 ? (discountAmount / subtotal) * 100 : 0),
    [discountAmount, subtotal],
  )
  const taxAmount = useMemo(
    () => (subtotal - discountAmount) * (taxPct / 100),
    [discountAmount, subtotal, taxPct],
  )
  const grandTotal = useMemo(
    () => subtotal - discountAmount + taxAmount,
    [subtotal, discountAmount, taxAmount],
  )

  const setProposalField = (
    field: keyof ProposalWithDiscount,
    value: string | number | 'percent' | 'amount' | ProposalTypeValue,
  ) => {
    setProposal((prev) => ({ ...prev, [field]: value }))
  }

  const setDefaultField = (field: keyof typeof defaults, value: string) => {
    setDefaults((prev) => ({ ...prev, [field]: value }))
  }

  const setItemField = (id: string, field: keyof ProposalItem, value: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const addItem = () => setItems((prev) => [...prev, createItem()])
  const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id))

  useEffect(() => {
    const refreshToken = () => {
      fetch('/api/users/refresh-token', { method: 'POST', credentials: 'include' }).catch(() => {})
    }

    refreshToken()
    const interval = setInterval(refreshToken, 20 * 60 * 1000)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') refreshToken()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  const handleSave = async () => {
    setSaveState('saving')

    try {
      const response = await fetch(`/api/proposals/${proposalId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          proposalType: proposal.proposalType,
          proposalDate: proposal.proposalDate,
          proposalNumber: proposal.proposalNumber,
          pageEndSpacing: proposal.pageEndSpacing ?? 0,
          customerName: proposal.customerName,
          customerAddress: proposal.customerAddress,
          customerTaxOffice: proposal.customerTaxOffice,
          customerTaxNumber: proposal.customerTaxNumber,
          customerEmail: proposal.customerEmail,
          customerApprovalName: proposal.customerApprovalName,
          subject: proposal.subject,
          note: proposal.note,
          status,
          discountPercent: discountPct,
          discountType: proposal.discountType,
          discountValue: discountVal,
          taxPercent: taxPct,
          discountAmount,
          taxAmount,
          grandTotal,
          items: calculatedItems.map(({ id, ...rest }) => ({ id, ...rest })),
          companySnapshot: defaults,
        }),
      })

      if (!response.ok) {
        setSaveState('error')
        return
      }

      setSaveState('saved')
      router.refresh()
    } catch {
      setSaveState('error')
    }
  }

  const loadDefaults = async () => {
    setIsLoadingDefaults(true)
    try {
      const response = await fetch('/api/proposal-settings')
      const data = await response.json()

      if (!data.error) {
        setDefaults((prev) => ({
          ...prev,
          companyName: data.companyName || prev.companyName,
          companySubtitle: data.companySubtitle || prev.companySubtitle,
          companyAddress: data.companyAddress || prev.companyAddress,
          companyPhone: data.companyPhone || prev.companyPhone,
          companyEmail: data.companyEmail || prev.companyEmail,
          companyTaxOffice: data.companyTaxOffice || prev.companyTaxOffice,
          companyTaxNumber: data.companyTaxNumber || prev.companyTaxNumber,
          validity: data.validity || prev.validity,
          payment: data.payment || prev.payment,
          paymentMethod: data.paymentMethod || prev.paymentMethod,
          bankName: data.bankName || prev.bankName,
          bankAccount: data.bankAccount || prev.bankAccount,
          generalTerms: data.generalTerms || prev.generalTerms,
          warrantyTerms: data.warrantyTerms || prev.warrantyTerms,
          contractorName: data.contractorName || prev.contractorName,
        }))
      }
    } finally {
      setIsLoadingDefaults(false)
    }
  }

  const handleSaveCompanySettings = async () => {
    setSettingsSaveState('saving')

    try {
      const response = await fetch('/api/proposal-settings', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: defaults.companyName,
          companySubtitle: defaults.companySubtitle,
          companyAddress: defaults.companyAddress,
          companyPhone: defaults.companyPhone,
          companyEmail: defaults.companyEmail,
          companyTaxOffice: defaults.companyTaxOffice,
          companyTaxNumber: defaults.companyTaxNumber,
          validity: defaults.validity,
          payment: defaults.payment,
          paymentMethod: defaults.paymentMethod,
          bankName: defaults.bankName,
          bankAccount: defaults.bankAccount,
          generalTerms: defaults.generalTerms,
          warrantyTerms: defaults.warrantyTerms,
          contractorName: defaults.contractorName,
        }),
      })

      if (!response.ok) {
        setSettingsSaveState('error')
        return
      }

      setSettingsSaveState('saved')
      setTimeout(() => setSettingsSaveState('idle'), 3000)
    } catch {
      setSettingsSaveState('error')
    }
  }

  return (
    <section className="min-h-screen py-10 md:py-16 print:py-0 print:!bg-white">
      <div className="container px-4 print:max-w-none print:px-0">
        <div className="mb-6 print:hidden">
          <div className="mb-3 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
            Teklif Düzenleyici
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Mevcut teklifi düzenle
          </h1>
          <p className="mt-2 max-w-2xl text-gray-500">
            Teklif bilgilerini güncelleyin, anlık önizlemeyi kontrol edin ve değişiklikleri
            kaydedin.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[460px_minmax(0,1fr)] print:block">
          <div className="print:hidden">
            <div className="sticky top-4 z-10 mb-4 flex flex-wrap gap-2 rounded-2xl border border-gray-200 bg-white/90 p-2 shadow-sm backdrop-blur-sm">
              <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="flex-1 gap-1.5">
                    <Settings className="h-4 w-4" />
                    <span className="hidden sm:inline">Firma Ayarları</span>
                    <span className="sm:hidden">Ayarlar</span>
                    {isLoadingDefaults && <Loader2 className="h-3 w-3 animate-spin opacity-60" />}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="flex w-full flex-col overflow-hidden sm:max-w-md"
                >
                  <SheetHeader className="shrink-0 pb-2">
                    <SheetTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-brand-600" />
                      Firma &amp; Teklif Şartları
                    </SheetTitle>
                    <p className="text-xs text-gray-500">
                      Firma Bilgileri değişiklikleri Site Ayarları&apos;na kaydedilir.
                    </p>
                  </SheetHeader>

                  <div className="flex-1 overflow-y-auto pr-1">
                    <Accordion
                      type="multiple"
                      defaultValue={['company', 'terms']}
                      className="space-y-2"
                    >
                      <AccordionItem
                        value="company"
                        className="rounded-xl border border-gray-200 px-4"
                      >
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                          Firma Bilgileri
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pb-2">
                            <FormField
                              label="Firma Adı"
                              id="s-companyName"
                              value={defaults.companyName}
                              onChange={(value) => setDefaultField('companyName', value)}
                            />
                            <FormField
                              label="Alt Başlık / Hizmet Tanımı"
                              id="s-companySubtitle"
                              value={defaults.companySubtitle}
                              onChange={(value) => setDefaultField('companySubtitle', value)}
                            />
                            <FormField
                              label="Adres"
                              id="s-companyAddress"
                              value={defaults.companyAddress}
                              onChange={(value) => setDefaultField('companyAddress', value)}
                              multiline
                              rows={2}
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <FormField
                                label="Telefon"
                                id="s-companyPhone"
                                value={defaults.companyPhone}
                                onChange={(value) => setDefaultField('companyPhone', value)}
                              />
                              <FormField
                                label="E-posta"
                                id="s-companyEmail"
                                value={defaults.companyEmail}
                                onChange={(value) => setDefaultField('companyEmail', value)}
                              />
                              <FormField
                                label="Vergi Dairesi"
                                id="s-companyTaxOffice"
                                value={defaults.companyTaxOffice}
                                onChange={(value) => setDefaultField('companyTaxOffice', value)}
                              />
                              <FormField
                                label="Vergi No"
                                id="s-companyTaxNumber"
                                value={defaults.companyTaxNumber}
                                onChange={(value) => setDefaultField('companyTaxNumber', value)}
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="terms"
                        className="rounded-xl border border-gray-200 px-4"
                      >
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                          Ödeme &amp; Banka
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pb-2">
                            <div className="grid grid-cols-2 gap-3">
                              <FormField
                                label="Teklif Süresi"
                                id="s-validity"
                                value={defaults.validity}
                                onChange={(value) => setDefaultField('validity', value)}
                              />
                              <FormField
                                label="Ödeme"
                                id="s-payment"
                                value={defaults.payment}
                                onChange={(value) => setDefaultField('payment', value)}
                              />
                            </div>
                            <FormField
                              label="Ödeme Şekli"
                              id="s-paymentMethod"
                              value={defaults.paymentMethod}
                              onChange={(value) => setDefaultField('paymentMethod', value)}
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <FormField
                                label="Banka"
                                id="s-bankName"
                                value={defaults.bankName}
                                onChange={(value) => setDefaultField('bankName', value)}
                              />
                              <FormField
                                label="IBAN"
                                id="s-bankAccount"
                                value={defaults.bankAccount}
                                onChange={(value) => setDefaultField('bankAccount', value)}
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="clauses"
                        className="rounded-xl border border-gray-200 px-4"
                      >
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                          Açıklamalar &amp; Garanti
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pb-2">
                            <FormField
                              label="Genel Açıklamalar"
                              id="s-generalTerms"
                              value={defaults.generalTerms}
                              onChange={(value) => setDefaultField('generalTerms', value)}
                              multiline
                              rows={4}
                            />
                            <FormField
                              label="Garanti Koşulları"
                              id="s-warrantyTerms"
                              value={defaults.warrantyTerms}
                              onChange={(value) => setDefaultField('warrantyTerms', value)}
                              multiline
                              rows={4}
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="signatures"
                        className="rounded-xl border border-gray-200 px-4"
                      >
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                          İmza Bölümü
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pb-2">
                            <FormField
                              label="Teklif Veren / Yüklenici"
                              id="s-contractorName"
                              value={defaults.contractorName}
                              onChange={(value) => setDefaultField('contractorName', value)}
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="shrink-0 border-t border-gray-100 pt-3">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1.5"
                        onClick={loadDefaults}
                        disabled={isLoadingDefaults}
                      >
                        {isLoadingDefaults ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <RefreshCw className="h-3.5 w-3.5" />
                        )}
                        CMS&apos;ten yeniden yükle
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 gap-1.5"
                        onClick={handleSaveCompanySettings}
                        disabled={settingsSaveState === 'saving'}
                      >
                        {settingsSaveState === 'saving' && (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        )}
                        {settingsSaveState === 'saved' && <CheckCircle2 className="h-3.5 w-3.5" />}
                        {(settingsSaveState === 'idle' || settingsSaveState === 'error') && (
                          <Save className="h-3.5 w-3.5" />
                        )}
                        {settingsSaveState === 'saving'
                          ? 'Kaydediliyor…'
                          : settingsSaveState === 'saved'
                          ? 'Kaydedildi'
                          : 'Firma Bilgilerini Kaydet'}
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={() => window.print()}
              >
                <Printer className="h-4 w-4" />
                <span className="hidden sm:inline">PDF / Yazdır</span>
              </Button>

              <ProposalShareButton
                proposalId={proposalId}
                proposalNumber={proposal.proposalNumber || ''}
                size="sm"
              />

              <Button
                variant="cta"
                size="sm"
                className="gap-1.5"
                onClick={handleSave}
                disabled={saveState === 'saving'}
              >
                {saveState === 'saving' && <Loader2 className="h-4 w-4 animate-spin" />}
                {saveState === 'saved' && <CheckCircle2 className="h-4 w-4" />}
                {(saveState === 'idle' || saveState === 'error') && <Save className="h-4 w-4" />}
                {saveState === 'saving'
                  ? 'Kaydediliyor…'
                  : saveState === 'saved'
                  ? 'Kaydedildi'
                  : 'Kaydet'}
              </Button>
            </div>

            {saveState === 'error' && (
              <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
                Kaydetme başarısız. Lütfen tekrar deneyin.
              </p>
            )}

            <Accordion
              type="multiple"
              defaultValue={['proposal-info', 'customer-info', 'items', 'totals']}
              className="space-y-3"
            >
              <AccordionItem
                value="proposal-info"
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <FileText className="h-4 w-4 text-brand-600" />
                    Teklif Bilgileri
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-gray-600">Teklif Türü</Label>
                      <Select
                        value={proposal.proposalType || 'teklif'}
                        onValueChange={(value) =>
                          setProposalField('proposalType', value as ProposalTypeValue)
                        }
                      >
                        <SelectTrigger className="bg-card text-sm">
                          <SelectValue placeholder="Teklif türü seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="proforma">Proforma</SelectItem>
                          <SelectItem value="teklif">Teklif</SelectItem>
                          <SelectItem value="siparis">Sipariş</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <FormField
                      label="Tarih"
                      id="proposalDate"
                      type="date"
                      value={proposal.proposalDate || ''}
                      onChange={(value) => setProposalField('proposalDate', value)}
                    />
                    <FormField
                      label="Teklif No"
                      id="proposalNumber"
                      value={proposal.proposalNumber || ''}
                      onChange={(value) => setProposalField('proposalNumber', value)}
                    />

                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-gray-600">Durum</Label>
                      <Select
                        value={status}
                        onValueChange={(value) => setStatus(value as typeof status)}
                      >
                        <SelectTrigger className="bg-card text-sm">
                          <SelectValue placeholder="Durum seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Taslak</SelectItem>
                          <SelectItem value="submitted">Gönderildi</SelectItem>
                          <SelectItem value="accepted">Kabul Edildi</SelectItem>
                          <SelectItem value="rejected">Reddedildi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="pageEndSpacing"
                          className="text-xs font-medium text-gray-600"
                        >
                          Sayfa Sonu Boşluğu
                        </Label>
                        <span className="text-xs font-medium text-gray-500">
                          {proposal.pageEndSpacing ?? 0}px
                        </span>
                      </div>
                      <Slider
                        id="pageEndSpacing"
                        min={0}
                        max={200}
                        step={5}
                        value={[proposal.pageEndSpacing ?? 0]}
                        onValueChange={(value) => setProposalField('pageEndSpacing', value[0] ?? 0)}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="customer-info"
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <User className="h-4 w-4 text-brand-600" />
                    Müşteri Bilgileri
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="space-y-4">
                    <FormField
                      label="Müşteri"
                      id="customerName"
                      value={proposal.customerName || ''}
                      onChange={(value) => setProposalField('customerName', value)}
                    />
                    <FormField
                      label="Adres"
                      id="customerAddress"
                      value={proposal.customerAddress || ''}
                      onChange={(value) => setProposalField('customerAddress', value)}
                      multiline
                      rows={3}
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        label="Vergi Dairesi"
                        id="customerTaxOffice"
                        value={proposal.customerTaxOffice || ''}
                        onChange={(value) => setProposalField('customerTaxOffice', value)}
                      />
                      <FormField
                        label="Vergi No"
                        id="customerTaxNumber"
                        value={proposal.customerTaxNumber || ''}
                        onChange={(value) => setProposalField('customerTaxNumber', value)}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        label="E-posta"
                        id="customerEmail"
                        value={proposal.customerEmail || ''}
                        onChange={(value) => setProposalField('customerEmail', value)}
                      />
                      <FormField
                        label="Onay Adı"
                        id="customerApprovalName"
                        value={proposal.customerApprovalName || ''}
                        onChange={(value) => setProposalField('customerApprovalName', value)}
                      />
                    </div>
                    <FormField
                      label="Konu"
                      id="subject"
                      value={proposal.subject || ''}
                      onChange={(value) => setProposalField('subject', value)}
                      multiline
                      rows={3}
                    />
                    <FormField
                      label="Not"
                      id="note"
                      value={proposal.note || ''}
                      onChange={(value) => setProposalField('note', value)}
                      multiline
                      rows={4}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="items"
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <StickyNote className="h-4 w-4 text-brand-600" />
                    Malzeme / Hizmet Kalemleri
                    <span className="ml-auto mr-2 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                      {items.length}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="space-y-3">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-gray-100 bg-gray-50 p-3"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-gray-500 shadow-sm">
                              #{index + 1}
                            </span>
                            <span className="text-xs font-medium text-gray-500">Kalem detayı</span>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                            Sil
                          </Button>
                        </div>
                        <div className="grid gap-3">
                          <FormField
                            label="Malzeme / Hizmet"
                            id={`item-description-${item.id}`}
                            value={item.description}
                            onChange={(value) => setItemField(item.id, 'description', value)}
                          />
                          <div className="grid gap-3 md:grid-cols-3">
                            <FormField
                              label="Adet/MT"
                              id={`item-quantity-${item.id}`}
                              value={item.quantity}
                              onChange={(value) => setItemField(item.id, 'quantity', value)}
                            />
                            <FormField
                              label="Br. Fiyat"
                              id={`item-unitPrice-${item.id}`}
                              value={item.unitPrice}
                              onChange={(value) => setItemField(item.id, 'unitPrice', value)}
                            />
                            <div className="space-y-1.5">
                              <Label className="text-xs font-medium text-gray-600">Tutar</Label>
                              <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700">
                                {formatCurrency(
                                  parseNumber(item.quantity) * parseNumber(item.unitPrice),
                                )}{' '}
                                ₺
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" onClick={addItem}>
                      Yeni kalem ekle
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="totals"
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <Settings className="h-4 w-4 text-brand-600" />
                    Fiyatlandırma
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-gray-600">İskonto Türü</Label>
                      <Select
                        value={proposal.discountType || 'percent'}
                        onValueChange={(value) => setProposalField('discountType', value)}
                      >
                        <SelectTrigger className="bg-card text-sm">
                          <SelectValue placeholder="İskonto türü" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="percent">Yüzde</SelectItem>
                          <SelectItem value="amount">Tutar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <FormField
                      label="İskonto Değeri"
                      id="discountValue"
                      value={String(proposal.discountValue ?? 0)}
                      onChange={(value) =>
                        setProposalField('discountValue', String(Number(value) || 0))
                      }
                    />
                    <FormField
                      label="KDV (%)"
                      id="taxPercent"
                      value={String(proposal.taxPercent ?? 0)}
                      onChange={(value) =>
                        setProposalField('taxPercent', String(Number(value) || 0))
                      }
                    />
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Ara Toplam</span>
                        <span className="font-medium text-gray-900">
                          {formatCurrency(subtotal)} ₺
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-gray-600">İskonto</span>
                        <span className="font-medium text-gray-900">
                          -{formatCurrency(discountAmount)} ₺
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-gray-600">KDV</span>
                        <span className="font-medium text-gray-900">
                          +{formatCurrency(taxAmount)} ₺
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3 font-semibold">
                        <span className="text-gray-900">Genel Toplam</span>
                        <span className="text-base text-gray-900">
                          {formatCurrency(grandTotal)} ₺
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <ProposalDocument defaults={defaults} proposal={proposal} items={items} />
        </div>
      </div>
    </section>
  )
}
