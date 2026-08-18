'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ProposalDocument } from '@/components/proposal/proposal-document'
import {
  ProposalDefaults,
  ProposalItem,
  createItem,
  initialDefaults,
  initialItems,
  parseNumber,
  formatCurrency,
} from '@/components/proposal/proposal-data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Settings,
  Printer,
  Save,
  Plus,
  Trash2,
  Building2,
  User,
  FileText,
  StickyNote,
  CheckCircle2,
  Loader2,
  RefreshCw,
  AlertCircle,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProposalFields {
  proposalType: 'proforma' | 'teklif' | 'siparis'
  proposalDate: string
  proposalNumber: string
  pageEndSpacing: string
  customerName: string
  customerAddress: string
  customerTaxOffice: string
  customerTaxNumber: string
  customerEmail: string
  customerApprovalName: string
  subject: string
  note: string
  discountType: 'percent' | 'amount'
  discountValue: string
  taxPercent: string
}

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const todayISO = () => new Date().toISOString().split('T')[0]

const initialProposal: ProposalFields = {
  proposalType: 'teklif',
  proposalDate: todayISO(),
  proposalNumber: '',
  pageEndSpacing: '0',
  customerName: '',
  customerAddress: '',
  customerTaxOffice: '',
  customerTaxNumber: '',
  customerEmail: '',
  customerApprovalName: 'MÜŞTERİ / KURUM',
  subject: '',
  note: '',
  discountType: 'percent',
  discountValue: '0',
  taxPercent: '20',
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FormField({
  label,
  id,
  value,
  onChange,
  multiline = false,
  rows = 3,
  suffix,
  type = 'text',
  error,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  multiline?: boolean
  rows?: number
  suffix?: string
  type?: string
  error?: string
}) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={id}
        className={`text-xs font-medium ${error ? 'text-red-600' : 'text-gray-600'}`}
      >
        {label}
        {error && <span className="ml-1.5 text-red-500">*</span>}
      </Label>
      {multiline ? (
        <Textarea
          id={id}
          value={value}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          className={`text-sm ${error ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
        />
      ) : (
        <div className="relative">
          <Input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`text-sm bg-card ${suffix ? 'pr-8' : ''} ${
              error ? 'border-red-400 focus-visible:ring-red-400' : ''
            }`}
          />
          {suffix && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
              {suffix}
            </span>
          )}
        </div>
      )}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="h-3 w-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export const ProposalGenerator = () => {
  const router = useRouter()
  const [defaults, setDefaults] = useState<ProposalDefaults>(initialDefaults)
  const [proposal, setProposal] = useState<ProposalFields>(initialProposal)
  const [items, setItems] = useState<ProposalItem[]>(initialItems)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [settingsSaveStatus, setSettingsSaveStatus] = useState<SaveStatus>('idle')
  const [isLoadingDefaults, setIsLoadingDefaults] = useState(true)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // ── Fetch CMS defaults on mount ────────────────────────────────────────────
  const loadDefaults = () => {
    setIsLoadingDefaults(true)
    fetch('/api/proposal-settings')
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) {
          setDefaults({
            companyName: data.companyName || initialDefaults.companyName,
            companySubtitle: data.companySubtitle || initialDefaults.companySubtitle,
            companyAddress: data.companyAddress || initialDefaults.companyAddress,
            companyPhone: data.companyPhone || initialDefaults.companyPhone,
            companyEmail: data.companyEmail || initialDefaults.companyEmail,
            companyTaxOffice: data.companyTaxOffice || initialDefaults.companyTaxOffice,
            companyTaxNumber: data.companyTaxNumber || initialDefaults.companyTaxNumber,
            validity: data.validity || initialDefaults.validity,
            payment: data.payment || initialDefaults.payment,
            paymentMethod: data.paymentMethod || initialDefaults.paymentMethod,
            bankName: data.bankName || initialDefaults.bankName,
            bankAccount: data.bankAccount || initialDefaults.bankAccount,
            generalTerms: data.generalTerms || initialDefaults.generalTerms,
            warrantyTerms: data.warrantyTerms || initialDefaults.warrantyTerms,
            contractorName: data.contractorName || initialDefaults.contractorName,
          })
          setProposal((prev) => ({
            ...prev,
            proposalDate: todayISO(),
            proposalNumber: data.suggestedNumber || prev.proposalNumber,
          }))
        }
      })
      .catch(console.error)
      .finally(() => setIsLoadingDefaults(false))
  }

  useEffect(() => {
    document.body.classList.add('proposal-page')
    loadDefaults()

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
      document.body.classList.remove('proposal-page')
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  // ── Calculations ────────────────────────────────────────────────────────────
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

  const discountVal = parseNumber(proposal.discountValue)
  const taxPct = parseNumber(proposal.taxPercent)

  const discountAmount = useMemo(() => {
    if (proposal.discountType === 'percent') return subtotal * (discountVal / 100)
    return Math.min(discountVal, subtotal) // fixed amount, capped at subtotal
  }, [subtotal, discountVal, proposal.discountType])

  const discountPct = useMemo(
    () => (subtotal > 0 ? (discountAmount / subtotal) * 100 : 0),
    [subtotal, discountAmount],
  )

  const afterDiscount = useMemo(() => subtotal - discountAmount, [subtotal, discountAmount])
  const taxAmount = useMemo(() => afterDiscount * (taxPct / 100), [afterDiscount, taxPct])
  const grandTotal = useMemo(() => afterDiscount + taxAmount, [afterDiscount, taxAmount])

  // ── Handlers ────────────────────────────────────────────────────────────────
  const setDefault = (field: keyof ProposalDefaults, value: string) =>
    setDefaults((prev) => ({ ...prev, [field]: value }))

  const setProposalField = (
    field: keyof ProposalFields,
    value: string | 'percent' | 'amount' | ProposalFields['proposalType'],
  ) => setProposal((prev) => ({ ...prev, [field]: value }))

  const setItemField = (id: string, field: keyof ProposalItem, value: string) => {
    setItems((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
      const hasValid = updated.some(
        (item) => item.description.trim() && parseNumber(item.unitPrice) > 0,
      )
      if (hasValid)
        setErrors((e) => {
          const { items: _, ...rest } = e
          return rest
        })
      return updated
    })
  }

  const addItem = () => setItems((prev) => [...prev, createItem()])
  const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id))

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!proposal.customerName.trim()) newErrors.customerName = 'Müşteri adı zorunludur.'
    if (!proposal.subject.trim()) newErrors.subject = 'Konu zorunludur.'
    const hasValidItem = items.some(
      (item) => item.description.trim() && parseNumber(item.unitPrice) > 0,
    )
    if (!hasValidItem)
      newErrors.items = 'En az 1 malzeme/hizmet kalemi (açıklama + birim fiyat) girilmelidir.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async () => {
    if (!validate()) return
    setSaveStatus('saving')
    try {
      const res = await fetch('/api/save-proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          proposalType: proposal.proposalType,
          proposalNumber: proposal.proposalNumber,
          proposalDate: proposal.proposalDate,
          customerName: proposal.customerName,
          customerAddress: proposal.customerAddress,
          customerTaxOffice: proposal.customerTaxOffice,
          customerTaxNumber: proposal.customerTaxNumber,
          customerEmail: proposal.customerEmail,
          customerApprovalName: proposal.customerApprovalName,
          subject: proposal.subject,
          note: proposal.note,
          pageEndSpacing: parseNumber(proposal.pageEndSpacing),
          discountPercent: discountPct,
          discountType: proposal.discountType,
          discountValue: discountVal,
          taxPercent: taxPct,
          discountAmount,
          taxAmount,
          grandTotal,
          items: calculatedItems.map(({ id: _id, ...rest }) => rest),
          companySnapshot: { ...defaults },
        }),
      })
      const json = await res.json()
      setSaveStatus(json.success ? 'saved' : 'error')
      if (json.success) {
        router.push(`/teklifler/${json.id}/duzenle`)
      }
    } catch {
      setSaveStatus('error')
    }
  }

  const handleSaveCompanySettings = async () => {
    setSettingsSaveStatus('saving')
    try {
      const response = await fetch('/api/proposal-settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: defaults.companyName,
          companySubtitle: defaults.companySubtitle,
          companyAddress: defaults.companyAddress,
          companyPhone: defaults.companyPhone,
          companyEmail: defaults.companyEmail,
          companyTaxOffice: defaults.companyTaxOffice,
          companyTaxNumber: defaults.companyTaxNumber,
        }),
      })

      if (!response.ok) {
        setSettingsSaveStatus('error')
        return
      }

      setSettingsSaveStatus('saved')
      setTimeout(() => setSettingsSaveStatus('idle'), 3000)
    } catch {
      setSettingsSaveStatus('error')
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section className="min-h-screen py-10 md:py-16 print:py-0 print:!bg-white">
      <div className="container px-4 print:max-w-none print:px-0">
        {/* Page header */}
        <div className="mb-6 print:hidden">
          <div className="mb-3 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
            Otomatik Teklif Oluşturucu
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Proforma teklif oluştur
          </h1>
          <p className="mt-2 max-w-2xl text-gray-500">
            Müşteri bilgilerini ve kalemleri girin, anlık önizlemeyi kontrol edip PDF olarak
            kaydedin.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[460px_minmax(0,1fr)] print:block">
          {/* ═══ LEFT PANEL ═══════════════════════════════════════════════ */}
          <div className="print:hidden">
            {/* Sticky action bar */}
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
                              onChange={(v) => setDefault('companyName', v)}
                            />
                            <FormField
                              label="Alt Başlık / Hizmet Tanımı"
                              id="s-companySubtitle"
                              value={defaults.companySubtitle}
                              onChange={(v) => setDefault('companySubtitle', v)}
                            />
                            <FormField
                              label="Adres"
                              id="s-companyAddress"
                              value={defaults.companyAddress}
                              onChange={(v) => setDefault('companyAddress', v)}
                              multiline
                              rows={2}
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <FormField
                                label="Telefon"
                                id="s-companyPhone"
                                value={defaults.companyPhone}
                                onChange={(v) => setDefault('companyPhone', v)}
                              />
                              <FormField
                                label="E-posta"
                                id="s-companyEmail"
                                value={defaults.companyEmail}
                                onChange={(v) => setDefault('companyEmail', v)}
                              />
                              <FormField
                                label="Vergi Dairesi"
                                id="s-companyTaxOffice"
                                value={defaults.companyTaxOffice}
                                onChange={(v) => setDefault('companyTaxOffice', v)}
                              />
                              <FormField
                                label="Vergi No"
                                id="s-companyTaxNumber"
                                value={defaults.companyTaxNumber}
                                onChange={(v) => setDefault('companyTaxNumber', v)}
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
                                onChange={(v) => setDefault('validity', v)}
                              />
                              <FormField
                                label="Ödeme"
                                id="s-payment"
                                value={defaults.payment}
                                onChange={(v) => setDefault('payment', v)}
                              />
                            </div>
                            <FormField
                              label="Ödeme Şekli"
                              id="s-paymentMethod"
                              value={defaults.paymentMethod}
                              onChange={(v) => setDefault('paymentMethod', v)}
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <FormField
                                label="Banka"
                                id="s-bankName"
                                value={defaults.bankName}
                                onChange={(v) => setDefault('bankName', v)}
                              />
                              <FormField
                                label="IBAN"
                                id="s-bankAccount"
                                value={defaults.bankAccount}
                                onChange={(v) => setDefault('bankAccount', v)}
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
                              onChange={(v) => setDefault('generalTerms', v)}
                              multiline
                              rows={4}
                            />
                            <FormField
                              label="Garanti Koşulları"
                              id="s-warrantyTerms"
                              value={defaults.warrantyTerms}
                              onChange={(v) => setDefault('warrantyTerms', v)}
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
                              onChange={(v) => setDefault('contractorName', v)}
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
                        disabled={settingsSaveStatus === 'saving'}
                      >
                        {settingsSaveStatus === 'saving' && (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        )}
                        {settingsSaveStatus === 'saved' && <CheckCircle2 className="h-3.5 w-3.5" />}
                        {(settingsSaveStatus === 'idle' || settingsSaveStatus === 'error') && (
                          <Save className="h-3.5 w-3.5" />
                        )}
                        {settingsSaveStatus === 'saving'
                          ? 'Kaydediliyor…'
                          : settingsSaveStatus === 'saved'
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

              <Button
                variant="cta"
                size="sm"
                className="gap-1.5"
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
              >
                {saveStatus === 'saving' && <Loader2 className="h-4 w-4 animate-spin" />}
                {saveStatus === 'saved' && <CheckCircle2 className="h-4 w-4" />}
                {(saveStatus === 'idle' || saveStatus === 'error') && <Save className="h-4 w-4" />}
                {saveStatus === 'saving'
                  ? 'Kaydediliyor…'
                  : saveStatus === 'saved'
                  ? 'Kaydedildi'
                  : 'Kaydet'}
              </Button>
            </div>

            {saveStatus === 'error' && (
              <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
                Kaydetme başarısız. Lütfen tekrar deneyin.
              </p>
            )}

            {/* Proposal form accordion */}
            <Accordion
              type="multiple"
              defaultValue={['proposal-info', 'customer-info', 'items', 'notes']}
              className="space-y-3"
            >
              {/* Teklif Bilgileri */}
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-gray-600">Teklif Türü</Label>
                      <Select
                        value={proposal.proposalType}
                        onValueChange={(v) => setProposalField('proposalType', v)}
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
                      value={proposal.proposalDate}
                      onChange={(v) => setProposalField('proposalDate', v)}
                    />
                    <FormField
                      label="Teklif No"
                      id="proposalNumber"
                      value={proposal.proposalNumber}
                      onChange={(v) => setProposalField('proposalNumber', v)}
                    />
                    <div className="space-y-2 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="pageEndSpacing"
                          className="text-xs font-medium text-gray-600"
                        >
                          Sayfa Sonu Boşluğu
                        </Label>
                        <span className="text-xs font-medium text-gray-500">
                          {proposal.pageEndSpacing}px
                        </span>
                      </div>
                      <Slider
                        id="pageEndSpacing"
                        min={0}
                        max={300}
                        step={5}
                        value={[parseNumber(proposal.pageEndSpacing)]}
                        onValueChange={(value) =>
                          setProposalField('pageEndSpacing', String(value[0] ?? 0))
                        }
                      />
                      <div className="h-2" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Müşteri Bilgileri */}
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
                      label="Müşteri Adı / Unvanı"
                      id="customerName"
                      value={proposal.customerName}
                      onChange={(v) => {
                        setProposalField('customerName', v)
                        if (v.trim())
                          setErrors((e) => {
                            const { customerName: _, ...rest } = e
                            return rest
                          })
                      }}
                      error={errors.customerName}
                    />
                    <FormField
                      label="Adres"
                      id="customerAddress"
                      value={proposal.customerAddress}
                      onChange={(v) => setProposalField('customerAddress', v)}
                      multiline
                      rows={2}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        label="Vergi Dairesi"
                        id="customerTaxOffice"
                        value={proposal.customerTaxOffice}
                        onChange={(v) => setProposalField('customerTaxOffice', v)}
                      />
                      <FormField
                        label="Vergi No"
                        id="customerTaxNumber"
                        value={proposal.customerTaxNumber}
                        onChange={(v) => setProposalField('customerTaxNumber', v)}
                      />
                    </div>
                    <FormField
                      label="Mail Adresi"
                      id="customerEmail"
                      value={proposal.customerEmail}
                      onChange={(v) => setProposalField('customerEmail', v)}
                    />
                    <FormField
                      label="Müşteri / Kurum Onayı (imza alanı)"
                      id="customerApprovalName"
                      value={proposal.customerApprovalName}
                      onChange={(v) => setProposalField('customerApprovalName', v)}
                    />
                    <FormField
                      label="Konu"
                      id="subject"
                      value={proposal.subject}
                      onChange={(v) => {
                        setProposalField('subject', v)
                        if (v.trim())
                          setErrors((e) => {
                            const { subject: _, ...rest } = e
                            return rest
                          })
                      }}
                      multiline
                      rows={2}
                      error={errors.subject}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Kalemler */}
              <AccordionItem
                value="items"
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <FileText className="h-4 w-4 text-brand-600" />
                    Malzeme / Hizmet Kalemleri
                    <span className="ml-auto mr-2 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                      {items.length}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="space-y-3">
                    {calculatedItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-gray-100 bg-gray-50 p-3"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-semibold text-gray-500">#{index + 1}</span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="rounded-md p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="space-y-3">
                          <FormField
                            label="Malzeme / Hizmet"
                            id={`desc-${item.id}`}
                            value={item.description}
                            onChange={(v) => setItemField(item.id, 'description', v)}
                          />
                          <div className="grid grid-cols-3 gap-2">
                            <FormField
                              label="Adet/MT"
                              id={`qty-${item.id}`}
                              value={item.quantity}
                              onChange={(v) => setItemField(item.id, 'quantity', v)}
                            />
                            <FormField
                              label="Br. Fiyat"
                              id={`price-${item.id}`}
                              value={item.unitPrice}
                              onChange={(v) => setItemField(item.id, 'unitPrice', v)}
                            />
                            <div className="space-y-1.5">
                              <Label className="text-xs font-medium text-gray-600">Tutar</Label>
                              <div className="flex h-9 items-center rounded-md border border-gray-200 bg-white px-2.5 text-xs font-medium text-gray-700">
                                {formatCurrency(item.total)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full gap-1.5 border-dashed hover:bg-brand-50 text-brand-500 border-brand-500 hover:text-brand-700"
                      onClick={addItem}
                    >
                      <Plus className="h-4 w-4" />
                      Yeni Malzeme / Hizmet ekle
                    </Button>

                    {errors.items && (
                      <p className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.items}
                      </p>
                    )}

                    {/* Discount & Tax */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        İskonto &amp; KDV
                      </p>
                      <div className="space-y-3">
                        {/* Discount row with type toggle */}
                        <div className="space-y-1.5">
                          <Label className="text-xs font-medium text-gray-600">İskonto</Label>
                          <div className="flex gap-2">
                            {/* Type toggle */}
                            <div className="flex overflow-hidden rounded-md border border-gray-200">
                              <button
                                type="button"
                                onClick={() => setProposalField('discountType', 'percent')}
                                className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                                  proposal.discountType === 'percent'
                                    ? 'bg-brand-600 text-white'
                                    : 'bg-white text-gray-500 hover:bg-gray-50'
                                }`}
                              >
                                %
                              </button>
                              <button
                                type="button"
                                onClick={() => setProposalField('discountType', 'amount')}
                                className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                                  proposal.discountType === 'amount'
                                    ? 'bg-brand-600 text-white'
                                    : 'bg-white text-gray-500 hover:bg-gray-50'
                                }`}
                              >
                                ₺
                              </button>
                            </div>
                            <div className="relative flex-1">
                              <Input
                                id="discountValue"
                                value={proposal.discountValue}
                                onChange={(e) => setProposalField('discountValue', e.target.value)}
                                className="pr-8 text-sm"
                              />
                              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                {proposal.discountType === 'percent' ? '%' : '₺'}
                              </span>
                            </div>
                          </div>
                          {/* Show derived value */}
                          {discountAmount > 0 && (
                            <p className="text-xs text-gray-400">
                              {proposal.discountType === 'percent'
                                ? `= ${formatCurrency(discountAmount)} ₺ tutar`
                                : `= %${discountPct.toFixed(2)} oran`}
                            </p>
                          )}
                        </div>

                        <FormField
                          label="KDV"
                          id="taxPercent"
                          value={proposal.taxPercent}
                          onChange={(v) => setProposalField('taxPercent', v)}
                          suffix="%"
                        />
                      </div>

                      {/* Summary */}
                      <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-3 text-sm">
                        <div className="flex justify-between text-gray-600">
                          <span>Ara Toplam</span>
                          <span>{formatCurrency(subtotal)} ₺</span>
                        </div>
                        {discountAmount > 0 && (
                          <div className="flex justify-between text-orange-600">
                            <span>
                              İskonto{' '}
                              {proposal.discountType === 'percent'
                                ? `(%${discountVal})`
                                : `(${formatCurrency(discountVal)} ₺)`}
                            </span>
                            <span>-{formatCurrency(discountAmount)} ₺</span>
                          </div>
                        )}
                        {discountAmount > 0 && (
                          <div className="flex justify-between text-gray-600">
                            <span>İskonto Sonrası</span>
                            <span>{formatCurrency(afterDiscount)} ₺</span>
                          </div>
                        )}
                        {taxPct > 0 && (
                          <div className="flex justify-between text-blue-600">
                            <span>KDV ({taxPct}%)</span>
                            <span>+{formatCurrency(taxAmount)} ₺</span>
                          </div>
                        )}
                        <div className="flex justify-between border-t border-brand-100 pt-2 font-bold text-brand-900">
                          <span>Genel Toplam</span>
                          <span>{formatCurrency(grandTotal)} ₺</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Notlar */}
              <AccordionItem
                value="notes"
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <StickyNote className="h-4 w-4 text-brand-600" />
                    Notlar
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <FormField
                    label="Not"
                    id="note"
                    value={proposal.note}
                    onChange={(v) => setProposalField('note', v)}
                    multiline
                    rows={4}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* ═══ RIGHT PANEL — PDF PREVIEW ════════════════════════════════ */}
          <ProposalDocument
            defaults={defaults}
            proposal={{
              id: 0,
              status: 'draft',
              createdAt: '',
              updatedAt: '',
              ...proposal,
              pageEndSpacing: parseNumber(proposal.pageEndSpacing),
              discountValue: parseNumber(proposal.discountValue),
              taxPercent: parseNumber(proposal.taxPercent),
            }}
            items={items}
          />
        </div>
      </div>
    </section>
  )
}
