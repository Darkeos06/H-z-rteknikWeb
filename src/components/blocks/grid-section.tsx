import { Card, CardContent } from '@/components/ui/card'
import { icons } from '../base/icons'
import RichText from './RichText'

interface ValueCardProps {
  title: string
  description: string
  icon: keyof typeof icons
  content: Record<string, any>
}

function GridCard({ title, description, icon, content }: ValueCardProps) {
  const Icon = icons[icon] || icons['7-24-hizmet']
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
        {content && (
          <RichText
            content={content as any}
            className="text-sm [&_a]:text-brand-600  [&_a]:block"
            enableProse={false}
          />
        )}
        {description && <p className="text-sm text-stone-600">{description}</p>}
      </CardContent>
    </Card>
  )
}

interface GridSectionProps {
  title?: string
  description?: string
  text?: Record<string, any>
  values: Array<ValueCardProps>
}

export function GridSection({
  title = 'Misyonumuz ve Değerlerimiz',
  description = '25 yıldır değişmeyen ilkelerimiz ve kalite standartlarımız ile hizmetinizdeyiz.',
  text,
  values,
}: GridSectionProps) {
  return (
    <section className="w-full bg-white bg-gradient-to-t from-brand-700/5 via-white to-brand-700/5 py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
          {text && <RichText content={text as any} />}
          {description && <p className="text-lg text-stone-600">{description}</p>}
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <GridCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}
