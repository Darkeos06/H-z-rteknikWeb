import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProcessCardProps {
  number: number
  title: string
  steps?:
    | {
        text: string
        id?: string | null
      }[]
    | null
}

export function ProcessCard({ number, title, steps }: ProcessCardProps) {
  return (
    <Card className="group bg-[#F3F3F3] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-4 border-b pb-2 border-brand-700/20 border-dashed">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-lg font-bold text-white">
            {number}
          </div>
          <CardTitle className="text-xl md:text-2xl font-semibold text-stone-900">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {steps && steps.length > 0 && (
          <ul className="space-y-3">
            {steps.map((step) => (
              <li key={step.id || step.text} className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-700" />
                <span className="text-stone-600">{step.text}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
