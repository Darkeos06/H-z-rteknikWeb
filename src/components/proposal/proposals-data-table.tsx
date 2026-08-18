'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { Proposal } from '@/payload-types'

const statusLabels: Record<NonNullable<Proposal['status']>, string> = {
  draft: 'Taslak',
  submitted: 'Gönderildi',
  accepted: 'Kabul Edildi',
  rejected: 'Reddedildi',
}

const proposalTypeLabels: Record<NonNullable<Proposal['proposalType']>, string> = {
  proforma: 'Proforma',
  teklif: 'Teklif',
  siparis: 'Sipariş',
}

const pageSizeOptions = ['10', '20', '50'] as const

interface ProposalsDataTableProps {
  currentPage: number
  data: Proposal[]
  filters: {
    q: string
    status: string
    type: string
  }
  pageCount: number
  pageSize: number
  totalDocs: number
}

export const ProposalsDataTable = ({
  currentPage,
  data,
  filters,
  pageCount,
  pageSize,
  totalDocs,
}: ProposalsDataTableProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState(filters.q)

  useEffect(() => {
    setSearchValue(filters.q)
  }, [filters.q])

  const updateSearchParams = (updates: Record<string, string | null>, resetPage = false) => {
    const nextSearchParams = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (!value) {
        nextSearchParams.delete(key)
        return
      }

      nextSearchParams.set(key, value)
    })

    if (resetPage) {
      nextSearchParams.delete('page')
    }

    const nextQuery = nextSearchParams.toString()
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname)
  }

  const columns = useMemo<ColumnDef<Proposal>[]>(
    () => [
      {
        accessorKey: 'proposalNumber',
        header: 'Teklif No',
        cell: ({ row }) => (
          <span className="text-xs font-medium text-gray-900 sm:text-sm">
            {row.original.proposalNumber}
          </span>
        ),
      },
      {
        accessorKey: 'proposalDate',
        header: 'Tarih',
        cell: ({ row }) => row.original.proposalDate || '-',
      },
      {
        accessorKey: 'customerName',
        header: 'Müşteri',
        cell: ({ row }) => (
          <span className="text-xs text-gray-600 sm:text-sm">
            {row.original.customerName || '-'}
          </span>
        ),
      },
      {
        accessorKey: 'grandTotal',
        header: 'Toplam',
        cell: ({ row }) => {
          if (row.original.grandTotal === null || row.original.grandTotal === undefined) {
            return '-'
          }

          return `${row.original.grandTotal.toLocaleString('tr-TR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} ₺`
        },
      },
      {
        accessorKey: 'status',
        header: 'Durum',
        cell: ({ row }) => (
          <Badge variant="secondary">
            {statusLabels[row.original.status || 'draft'] || 'Taslak'}
          </Badge>
        ),
      },
      {
        id: 'actions',
        header: () => <div className="text-right">İşlem</div>,
        cell: ({ row }) => (
          <div className="flex justify-end gap-1 sm:gap-2">
            <Button asChild size="sm" variant="outline" className="h-8 px-2 text-xs sm:h-9 sm:px-3">
              <Link href={`/teklifler/${row.original.id}`}>Görüntüle</Link>
            </Button>
            <Button asChild size="sm" variant="cta" className="h-8 px-2 text-xs sm:h-9 sm:px-3">
              <Link href={`/teklifler/${row.original.id}/duzenle`}>Düzenle</Link>
            </Button>
          </div>
        ),
      },
    ],
    [],
  )

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
    state: {
      pagination: {
        pageIndex: Math.max(currentPage - 1, 0),
        pageSize,
      },
    },
  })

  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < pageCount
  const hasActiveFilters = Boolean(filters.q || filters.status || filters.type)

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-3 shadow-sm sm:p-4">
        <Accordion type="single" collapsible defaultValue="ayarlar" className="w-full">
          <AccordionItem value="ayarlar" className="border-none">
            <AccordionTrigger className="py-0 hover:no-underline">
              <div className="flex min-w-0 flex-1 items-center gap-3 pr-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <SlidersHorizontal className="h-4 w-4 text-gray-700" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-sm font-semibold text-gray-900">Ayarlar</p>
                  <p className="text-xs text-gray-500">Arama, filtreleme ve sayfa görünümü</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="flex flex-col gap-3">
                {hasActiveFilters ? (
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {filters.q ? (
                        <button
                          type="button"
                          onClick={() => {
                            setSearchValue('')
                            updateSearchParams({ q: null }, true)
                          }}
                          className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm"
                        >
                          <Search className="h-3.5 w-3.5" />
                          {filters.q}
                          <X className="h-3.5 w-3.5" />
                        </button>
                      ) : null}

                      {filters.status ? (
                        <button
                          type="button"
                          onClick={() => updateSearchParams({ status: null }, true)}
                          className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm"
                        >
                          {statusLabels[filters.status as NonNullable<Proposal['status']>]}
                          <X className="h-3.5 w-3.5" />
                        </button>
                      ) : null}

                      {filters.type ? (
                        <button
                          type="button"
                          onClick={() => updateSearchParams({ type: null }, true)}
                          className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm"
                        >
                          {
                            proposalTypeLabels[
                              filters.type as NonNullable<Proposal['proposalType']>
                            ]
                          }
                          <X className="h-3.5 w-3.5" />
                        </button>
                      ) : null}
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      className="h-9 justify-start rounded-xl px-0 text-sm text-gray-600 hover:bg-transparent hover:text-gray-900 sm:px-3"
                      onClick={() => {
                        setSearchValue('')
                        updateSearchParams({ q: null, status: null, type: null }, true)
                      }}
                    >
                      <X className="h-4 w-4" />
                      Tümünü temizle
                    </Button>
                  </div>
                ) : null}

                <form
                  className="flex flex-col gap-3"
                  onSubmit={(event) => {
                    event.preventDefault()
                    updateSearchParams({ q: searchValue.trim() || null }, true)
                  }}
                >
                  <div className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="relative flex-1">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          value={searchValue}
                          onChange={(event) => setSearchValue(event.target.value)}
                          placeholder="Teklif no veya müşteri ara"
                          className="h-11 rounded-xl border-gray-200 bg-white pl-9 pr-10 shadow-sm"
                        />
                        {searchValue ? (
                          <button
                            type="button"
                            onClick={() => {
                              setSearchValue('')
                              updateSearchParams({ q: null }, true)
                            }}
                            className="absolute right-3 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                            aria-label="Aramayı temizle"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        ) : null}
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
                        <Button type="submit" variant="outline" className="h-11 rounded-xl px-5">
                          Ara
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-11 rounded-xl px-4"
                          onClick={() => {
                            setSearchValue('')
                            updateSearchParams({ q: null }, true)
                          }}
                        >
                          Temizle
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="min-w-0">
                        <Select
                          value={filters.status || 'all'}
                          onValueChange={(value) =>
                            updateSearchParams({ status: value === 'all' ? null : value }, true)
                          }
                        >
                          <SelectTrigger className="h-11 w-full rounded-xl border-gray-200 bg-white shadow-sm">
                            <SelectValue placeholder="Durum" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Tüm durumlar</SelectItem>
                            <SelectItem value="draft">Taslak</SelectItem>
                            <SelectItem value="submitted">Gönderildi</SelectItem>
                            <SelectItem value="accepted">Kabul Edildi</SelectItem>
                            <SelectItem value="rejected">Reddedildi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="min-w-0">
                        <Select
                          value={filters.type || 'all'}
                          onValueChange={(value) =>
                            updateSearchParams({ type: value === 'all' ? null : value }, true)
                          }
                        >
                          <SelectTrigger className="h-11 w-full rounded-xl border-gray-200 bg-white shadow-sm">
                            <SelectValue placeholder="Tür" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Tüm türler</SelectItem>
                            <SelectItem value="proforma">{proposalTypeLabels.proforma}</SelectItem>
                            <SelectItem value="teklif">{proposalTypeLabels.teklif}</SelectItem>
                            <SelectItem value="siparis">{proposalTypeLabels.siparis}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="min-w-0">
                        <Select
                          value={String(pageSize)}
                          onValueChange={(value) => updateSearchParams({ pageSize: value }, true)}
                        >
                          <SelectTrigger className="h-11 w-full rounded-xl border-gray-200 bg-white shadow-sm">
                            <SelectValue placeholder="Sayfa boyutu" />
                          </SelectTrigger>
                          <SelectContent>
                            {pageSizeOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option} / sayfa
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={[
                      'px-2 py-2 text-[11px] sm:px-4 sm:py-3 sm:text-sm',
                      header.id === 'proposalDate' ? 'hidden lg:table-cell' : '',
                      header.id === 'grandTotal' ? 'hidden sm:table-cell' : '',
                      header.id === 'status' ? 'hidden sm:table-cell' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={[
                        'px-2 py-3 text-xs text-gray-600 sm:px-4 sm:py-4 sm:text-sm',
                        cell.column.id === 'proposalDate' ? 'hidden lg:table-cell' : '',
                        cell.column.id === 'grandTotal' ? 'hidden sm:table-cell' : '',
                        cell.column.id === 'status' ? 'hidden sm:table-cell' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="px-4 py-10 text-center text-gray-500"
                >
                  Henüz kayıtlı teklif bulunmuyor.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-3 border-t pt-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Toplam <span className="font-medium text-gray-900">{totalDocs}</span> teklif
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span>
            Sayfa{' '}
            <span className="font-medium text-gray-900">{pageCount === 0 ? 0 : currentPage}</span> /{' '}
            <span className="font-medium text-gray-900">{pageCount}</span>
          </span>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              disabled={!canGoPrevious}
              onClick={() => updateSearchParams({ page: String(currentPage - 1) })}
            >
              Önceki
            </Button>
            <Button
              variant="outline"
              disabled={!canGoNext}
              onClick={() => updateSearchParams({ page: String(currentPage + 1) })}
            >
              Sonraki
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
