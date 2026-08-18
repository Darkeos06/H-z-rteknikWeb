'use client'

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Category {
  name: string
  count: number
  subcategories: { name: string; slug: string; count: number }[]
}

export function Categories({ categories }: { categories: Category[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kategoriler</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {categories.map((category, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="ml-2 text-sm text-stone-600">({category.count})</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1">
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={`/blog-kategori/${sub.slug}`}
                        className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-stone-600 transition-colors hover:bg-stone-100 hover:text-brand-600"
                      >
                        <span>{sub.name}</span>
                        <span>({sub.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
