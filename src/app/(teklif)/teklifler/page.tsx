import config from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ProposalsDataTable } from '@/components/proposal/proposals-data-table'
import type { Proposal } from '@/payload-types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teklifler | Hızır Teknik',
  description: 'Kayıtlı teklifleri yönetin.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

const proposalStatuses = ['draft', 'submitted', 'accepted', 'rejected'] as const
const proposalTypes = ['proforma', 'teklif', 'siparis'] as const
const pageSizeOptions = [10, 20, 50] as const

const getParamValue = (value: string | string[] | undefined): string => {
  if (Array.isArray(value)) {
    return value[0] ?? ''
  }

  return value ?? ''
}

const normalizePageNumber = (value: string): number => {
  const parsedValue = Number.parseInt(value, 10)

  if (!Number.isFinite(parsedValue) || parsedValue < 1) {
    return 1
  }

  return parsedValue
}

const normalizePageSize = (value: string): number => {
  const parsedValue = Number.parseInt(value, 10)

  if (!pageSizeOptions.includes(parsedValue as (typeof pageSizeOptions)[number])) {
    return pageSizeOptions[0]
  }

  return parsedValue
}

const normalizeStatus = (value: string): Proposal['status'] | undefined => {
  if (proposalStatuses.includes(value as (typeof proposalStatuses)[number])) {
    return value as Proposal['status']
  }

  return undefined
}

const normalizeProposalType = (value: string): Proposal['proposalType'] | undefined => {
  if (proposalTypes.includes(value as (typeof proposalTypes)[number])) {
    return value as Proposal['proposalType']
  }

  return undefined
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function ProposalsPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const q = getParamValue(resolvedSearchParams.q).trim()
  const status = normalizeStatus(getParamValue(resolvedSearchParams.status))
  const proposalType = normalizeProposalType(getParamValue(resolvedSearchParams.type))
  const page = normalizePageNumber(getParamValue(resolvedSearchParams.page))
  const pageSize = normalizePageSize(getParamValue(resolvedSearchParams.pageSize))
  const payload = await getPayload({ config })
  const where: Record<string, unknown> = {}

  if (q) {
    where.or = [{ proposalNumber: { like: q } }, { customerName: { like: q } }]
  }

  if (status) {
    where.status = {
      equals: status,
    }
  }

  if (proposalType) {
    where.proposalType = {
      equals: proposalType,
    }
  }

  const proposals = await payload.find({
    collection: 'proposals',
    depth: 0,
    page,
    limit: pageSize,
    sort: '-createdAt',
    where,
    select: {
      proposalNumber: true,
      proposalDate: true,
      customerName: true,
      grandTotal: true,
      status: true,
      proposalType: true,
    },
    overrideAccess: true,
  })

  return (
    <section className="py-6 md:py-10">
      <div className="container px-4">
        <Card className="overflow-hidden border-gray-200/80 shadow-sm">
          <CardHeader className="gap-4 border-b bg-gradient-to-br from-white via-white to-gray-50/80 px-4 py-5 sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Teklif Listesi
                </CardTitle>
                <CardDescription className="max-w-2xl text-sm text-gray-600">
                  Kayıtlı teklifleri görüntüleyin, filtreleyin ve mobilde rahatça yönetin.
                </CardDescription>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
                <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-left shadow-sm">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500">
                    Toplam
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {proposals.totalDocs} teklif
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-left shadow-sm">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500">
                    Sayfa
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {proposals.totalPages === 0 ? 0 : proposals.page} / {proposals.totalPages}
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 px-4 py-4 sm:px-6 sm:py-6">
            <div className="flex justify-stretch sm:justify-end">
              <Button asChild variant="cta" className="w-full sm:w-auto">
                <Link href="/teklifler/yeni">Yeni teklif oluştur</Link>
              </Button>
            </div>
            <ProposalsDataTable
              data={proposals.docs as Proposal[]}
              currentPage={proposals.page}
              pageCount={proposals.totalPages}
              pageSize={proposals.limit}
              totalDocs={proposals.totalDocs}
              filters={{
                q,
                status: status ?? '',
                type: proposalType ?? '',
              }}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
