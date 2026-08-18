import { cn } from '@/lib/utils'
import * as React from 'react'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  return (
    <div
      className={cn('w-full', className)}
      style={{
        maxWidth: width ? `${width}%` : undefined,
      }}
    >
      {children}
    </div>
  )
}
