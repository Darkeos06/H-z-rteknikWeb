import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ProposalDefaults,
  ProposalItem,
  ProposalWithDiscount,
  formatCurrency,
  parseNumber,
} from '@/components/proposal/proposal-data'

interface ProposalDocumentProps {
  defaults: ProposalDefaults
  proposal: ProposalWithDiscount
  items: ProposalItem[]
}

export const ProposalDocument = ({ defaults, proposal, items }: ProposalDocumentProps) => {
  const proposalNumberLabel =
    proposal.proposalType === 'proforma'
      ? 'Proforma No:'
      : proposal.proposalType === 'siparis'
        ? 'Sipariş No:'
        : 'Teklif No:'
  const calculatedItems = items.map((item) => ({
    ...item,
    total: parseNumber(item.quantity) * parseNumber(item.unitPrice),
  }))
  const subtotal = calculatedItems.reduce((sum, item) => sum + item.total, 0)
  const discountVal = parseNumber(String(proposal.discountValue ?? 0))
  const taxPct = parseNumber(String(proposal.taxPercent ?? 0))
  const discountAmount =
    proposal.discountType === 'percent'
      ? subtotal * (discountVal / 100)
      : Math.min(discountVal, subtotal)
  const discountPct = subtotal > 0 ? (discountAmount / subtotal) * 100 : 0
  const afterDiscount = subtotal - discountAmount
  const taxAmount = afterDiscount * (taxPct / 100)
  const grandTotal = afterDiscount + taxAmount
  const pageEndSpacing = Math.max(0, proposal.pageEndSpacing ?? 0)

  return (
    <div className="my-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm print:rounded-none print:border-0 print:bg-white print:p-0 print:pt-4 print:shadow-none">
      <div className="mx-auto max-w-[794px] -mt-4 bg-white text-black print:max-w-none">
        <div className="mx-auto max-w-full print:px-12">
          <img
            src="/images/proposal-header.jpeg"
            alt="Hızır Teknik teklif başlığı"
            className="h-36 w-full object-fill"
          />
        </div>
        <div className="mt-1 print:px-10">
          <div className="bg-red-600 py-0.5 text-center text-lg font-extrabold tracking-wide text-white">
            PROFORMA FATURA / FİYAT TEKLİFİ / SİPARİŞ FORMU
          </div>
        </div>
        <div className="border-b border-border print:px-10">
          <div className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
            <div className="flex gap-2">
              <span className="font-bold">Tarihi</span>
              <span className="font-bold">:</span>
              <span className="font-bold">
                {proposal.proposalDate
                  ? new Date(proposal.proposalDate + 'T00:00:00').toLocaleDateString('tr-TR')
                  : ' '}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">{proposalNumberLabel}</span>
              <span className="font-bold">{proposal.proposalNumber || ' '}</span>
            </div>
          </div>
        </div>
        <div className="border-b border-border px-4 py-4 text-sm leading-7 print:px-10">
          <div>
            <span className="font-bold">Firma</span>
            <span className="mx-2 font-bold">:</span>
            <span className="font-bold">{defaults.companyName}</span>
          </div>
          {defaults.companySubtitle && (
            <div className="ml-0.5 pl-14 font-bold">{defaults.companySubtitle}</div>
          )}
          <div>
            <span className="font-bold">Adres</span>
            <span className="mx-2 font-bold">:</span>
            <span>{defaults.companyAddress}</span>
          </div>
          <div>
            <span className="font-bold">Telefon</span>
            <span className="mx-2 font-bold">:</span>
            <span>{defaults.companyPhone}</span>
          </div>
          <div>
            <span className="font-bold">E-posta</span>
            <span className="mx-2 font-bold">:</span>
            <span className="text-blue-700 underline">{defaults.companyEmail}</span>
          </div>
          <div>
            <span className="font-bold">Vergi Dairesi</span>
            <span className="mx-2 font-bold">:</span>
            <span>{defaults.companyTaxOffice}</span>
          </div>
          <div>
            <span className="font-bold">Vergi No</span>
            <span className="mx-2 font-bold">:</span>
            <span>{defaults.companyTaxNumber}</span>
          </div>
        </div>
        <div className="border-b border-border px-4 py-4 text-sm leading-7 print:px-10">
          <div>
            <span className="font-bold">Müşteri</span>
            <span className="mx-2 font-bold">:</span>
            <span className="font-bold">{proposal.customerName || ' '}</span>
          </div>
          <div>
            <span className="font-bold">Adres</span>
            <span className="mx-2 font-bold">:</span>
            <span>{proposal.customerAddress || ' '}</span>
          </div>
          <div>
            <span className="font-bold">Vergi Dairesi</span>
            <span className="mx-2 font-bold">:</span>
            <span>{proposal.customerTaxOffice || ' '}</span>
          </div>
          <div>
            <span className="font-bold">Vergi Nosu</span>
            <span className="mx-2 font-bold">:</span>
            <span>{proposal.customerTaxNumber || ' '}</span>
          </div>
          <div>
            <span className="font-bold">Mail Adresi</span>
            <span className="mx-2 font-bold">:</span>
            <span>{proposal.customerEmail || ' '}</span>
          </div>
          <div>
            <span className="font-bold">Konu</span>
            <span className="mx-2 font-bold">:</span>
            <span className="font-bold">{proposal.subject || ' '}</span>
          </div>
        </div>
        <div className="px-4 py-4 print:px-10">
          <Table className="proposal-print-table w-full border border-gray-400 text-xs">
            <TableHeader className="proposal-print-table-header print:table-header-group">
              <TableRow className="bg-white hover:bg-transparent">
                <TableHead className="h-7 w-10 border-r border-gray-400 text-center font-bold text-black">
                  NO
                </TableHead>
                <TableHead className="h-7 border-r border-gray-400 font-bold text-black">
                  MALZEME / HİZMET
                </TableHead>
                <TableHead className="h-7 w-20 border-r border-gray-400 text-center font-bold text-black">
                  ADET/MT
                </TableHead>
                <TableHead className="h-7 w-28 border-r border-gray-400 text-right font-bold text-black">
                  BR.FİYATI
                </TableHead>
                <TableHead className="h-7 w-28 text-right font-bold text-black">TUTARI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calculatedItems.map((item, index) => (
                <TableRow
                  key={item.id}
                  className="proposal-print-item-row hover:bg-transparent print:break-inside-avoid"
                >
                  <TableCell className="border-r py-1 font-bold border-t border-gray-400 text-center">
                    {index + 1}
                  </TableCell>
                  <TableCell className="border-r py-1 border-t border-gray-400 font-medium">
                    {item.description || ''}
                  </TableCell>
                  <TableCell className="border-r py-1 border-t border-gray-400 text-center">
                    {item.quantity || ''}
                  </TableCell>
                  <TableCell className="border-r py-1 border-t border-gray-400 text-right">
                    {item.unitPrice ? formatCurrency(parseNumber(item.unitPrice)) : '0,00'}
                  </TableCell>
                  <TableCell className="border-t py-1 border-gray-400 text-right">
                    {formatCurrency(item.total)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody className="proposal-print-totals print:break-inside-avoid">
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="py-1 border-r border-t border-gray-400 text-right font-bold text-black"
                >
                  ARA TOPLAM:
                </TableCell>
                <TableCell className="py-1 border-t border-gray-400 text-right font-bold text-black">
                  {formatCurrency(subtotal)}
                </TableCell>
              </TableRow>
              {discountAmount > 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={4}
                    className="py-1 border-r border-t border-gray-400 text-right font-bold text-black"
                  >
                    {proposal.discountType === 'percent'
                      ? `İSKONTO (%${discountVal}):`
                      : `İSKONTO (%${discountPct.toFixed(1)} / ${formatCurrency(discountVal)} ₺):`}
                  </TableCell>
                  <TableCell className="border-t border-gray-400 text-right font-bold text-black">
                    -{formatCurrency(discountAmount)}
                  </TableCell>
                </TableRow>
              )}
              {taxPct > 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={4}
                    className="py-1 border-r border-t border-gray-400 text-right font-bold text-black"
                  >
                    KDV ({taxPct}%):
                  </TableCell>
                  <TableCell className="py-1 border-t border-gray-400 text-right font-bold text-black">
                    +{formatCurrency(taxAmount)}
                  </TableCell>
                </TableRow>
              )}
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="py-1 border-r border-t border-gray-400 text-right font-bold text-black"
                >
                  TOPLAM TUTAR:
                </TableCell>
                <TableCell className="py-1 border-t border-gray-400 text-right font-bold text-black">
                  {formatCurrency(grandTotal)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {pageEndSpacing > 0 && !proposal.note && (
          <div
            style={{ height: `${pageEndSpacing}px`, minHeight: `${pageEndSpacing}px` }}
            aria-hidden="true"
          />
        )}
        {proposal.note && (
          <div className="px-4 py-4 text-sm leading-6 print:break-before-page print:px-10">
            <span className="font-bold">Not: </span>
            <span className="whitespace-pre-line">{proposal.note}</span>
          </div>
        )}
        <div className="px-4 py-4 text-sm leading-7 print:break-inside-avoid print:px-10 print:py-2 print:leading-6">
          <div className="grid gap-1 print:gap-0">
            <div>
              <span className="font-bold">Teklif Süresi</span>
              <span className="mx-1">:</span>
              {defaults.validity}
            </div>
            <div>
              <span className="font-bold">Ödeme</span>
              <span className="mx-1">:</span>
              {defaults.payment}
            </div>
            <div>
              <span className="font-bold">Ödeme Şekli</span>
              <span className="mx-1">:</span>
              {defaults.paymentMethod}
            </div>
            <div>
              <span className="font-bold">Banka Bilgileri:</span>
              <span className="mx-1 font-bold">{defaults.bankName}</span>
              <span className="font-mono text-xs">{defaults.bankAccount}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4 py-4 text-sm leading-6 print:mt-2 print:px-10 print:py-2 print:pt-0">
          <div className="font-bold">Genel Açıklamalar:</div>
          <div className="mt-1 whitespace-pre-line print:mt-0">{defaults.generalTerms}</div>
        </div>
        <div className="px-4 py-4 text-sm leading-6 print:px-10 print:py-2 print:pt-0">
          <div className="font-bold">Garanti Koşulları:</div>
          <div className="mt-1 whitespace-pre-line print:mt-0">{defaults.warrantyTerms}</div>
        </div>
        <div className="px-4 py-3 text-xs leading-5 text-gray-700 print:px-10 print:py-1">
          Yukarıda belirtilen şartlarla iki nüsha olarak tanzim ve teati olunan işbu sözleşme
          taraflarca karşılıklı olarak imza altına alınmış ve bir nüshası MÜŞTERİ&apos;YE /
          KURUM&apos;A verilmiştir.
        </div>
        <div className="grid grid-cols-2 gap-6 px-4 py-10 text-center text-sm">
          <div>
            <div className="font-bold">TEKLİF VEREN / YÜKLENİCİ</div>
            <div className="mt-10 pt-2">KAŞE / İMZA</div>
          </div>
          <div>
            <div className="font-bold">MÜŞTERİ / KURUM ONAYI</div>
            <div className="mt-10 pt-2">KAŞE / İMZA</div>
          </div>
        </div>
      </div>
    </div>
  )
}
