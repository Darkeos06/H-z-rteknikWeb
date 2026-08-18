'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/lib/seo/types'

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export function FAQSection({
  faqs,
  title = 'Sıkça Sorulan Sorular',
  className = '',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <section className={`py-12 ${className}`}>
      <div className="container px-4">
        {title && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-transparent" />
          </div>
        )}
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-100 p-4 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
