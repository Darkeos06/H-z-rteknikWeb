import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTAProps {
  heading: string
  description: string
  buttonText: string
  buttonLink: string
  className?: string
}

export function CTA({
  heading = 'Sorununuz için Bize Ulaşın',
  description = 'Her türlü tamirat, tadilat ve teknik destek ihtiyacınız için 7/24 hizmetinizdeyiz.',
  buttonText = 'Bizimle İletişime Geçin',
  buttonLink = '/iletisim',
  className = '',
}: CTAProps) {
  return (
    <section className={cn('w-full bg-stone-900 text-white py-12 md:py-24', className)}>
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
          <p className="text-lg opacity-80">{description}</p>
          <Button asChild size="lg" className="mt-4 bg-brand-600 hover:bg-brand-700">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
