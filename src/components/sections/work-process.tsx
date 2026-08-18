'use client'

import { ProcessCard } from '../base/process-card'

interface WorkProcessProps {
  header: {
    subtitle?: string | null
    title: string
  }
  description: string
  processSteps?:
    | {
        number: number
        title: string
        steps?:
          | {
              text: string
              id?: string | null
            }[]
          | null
        id?: string | null
      }[]
    | null
}

export default function WorkProcess({ header, description, processSteps }: WorkProcessProps) {
  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between border-b border-brand-700/50 pb-6 md:pb-12 border-dashed md:items-center">
          <div>
            {header.subtitle && (
              <span className="text-sm mb-4 font-medium text-brand-600">{header.subtitle}</span>
            )}
            <h2 className="text-3xl tracking-tight text-stone-900 md:text-5xl">{header.title}</h2>
          </div>
          <p className="max-w-xl md:text-lg text-stone-600">{description}</p>
        </div>

        {processSteps && processSteps.length > 0 && (
          <div className="mt-8 md:mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <ProcessCard
                key={step.id || step.number}
                number={step.number}
                title={step.title}
                steps={step.steps}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
