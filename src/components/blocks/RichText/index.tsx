import React from 'react'

import { serializeLexical } from './serialize'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  content: Record<string, any>
  enableGutter?: boolean
  enableProse?: boolean
}

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  if (!content) {
    return null
  }

  return (
    <article
      className={cn(
        {
          'container px-4 ': enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose-sm md:prose-base prose xl:prose-lg dark:prose-invert prose-headings:font-mono prose-headings:tracking-tight [--tw-prose-bullets:#DC2625]':
            enableProse,
        },
        className,
      )}
    >
      {content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        serializeLexical({ nodes: content?.root?.children })}
    </article>
  )
}

export default RichText
