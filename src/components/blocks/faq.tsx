'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const faqVariants = cva('w-full py-12 md:py-24', {
  variants: {
    variant: {
      subtle: 'bg-stone-50/50',
      light: 'bg-white',
      dark: 'bg-stone-900 text-white',
      primary: 'bg-brand-800 text-white',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
})

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps extends VariantProps<typeof faqVariants> {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
  className?: string
}

export function FAQ({
  faqs,
  title = 'Sıkça Sorulan Sorular',
  subtitle = 'Hizmetlerimiz hakkında merak edilenler.',
  className,
  variant,
}: FAQProps) {
  return (
    <section className={cn(faqVariants({ variant }), className)}>
      <div className="container px-4 md:px-0">
        {(title || subtitle) && (
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            {title && (
              <h2
                className={cn(
                  'text-3xl font-bold tracking-tight md:text-4xl',
                  variant === 'dark' ? 'text-white' : 'text-stone-900',
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn('text-lg', variant === 'dark' ? 'text-stone-300' : 'text-stone-600')}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  className={cn(
                    'text-left text-lg font-semibold',
                    variant === 'dark' ? 'text-white' : 'text-stone-900',
                  )}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(variant === 'dark' ? 'text-stone-300' : 'text-stone-600')}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Default FAQ data for the services page
const servicesFaqs = [
  {
    question: 'Hizmet bölgeleriniz nerelerdir?',
    answer:
      "Ankara'nın tüm ilçelerinde hizmet vermekteyiz. Özellikle Eryaman, Etimesgut, Sincan, Batıkent ve çevre bölgelerde yoğun olarak çalışıyoruz.",
  },
  {
    question: 'Acil durum hizmeti veriyor musunuz?',
    answer:
      '7/24 acil durum hizmeti vermekteyiz. Su sızıntısı, elektrik arızası gibi acil durumlar için ekiplerimiz her an hazırdır.',
  },
  {
    question: 'Verdiğiniz hizmetler garantili mi?',
    answer:
      'Evet, tüm hizmetlerimiz garantilidir. İşçilik ve malzeme kalitesi için yazılı garanti belgesi veriyoruz.',
  },
  {
    question: 'Ödeme seçenekleriniz nelerdir?',
    answer:
      'Nakit, havale/EFT ve kredi kartı ile ödeme kabul ediyoruz. Büyük projeler için taksit seçenekleri de sunuyoruz.',
  },
]

// Export the services-specific FAQ component
export function ServicesFAQ() {
  return <FAQ faqs={servicesFaqs} variant="light" />
}
