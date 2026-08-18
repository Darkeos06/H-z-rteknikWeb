'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  text: string
}

interface InfiniteScrollListProps {
  items?: Service[]
  className?: string
}

export function InfiniteScrollList({ items = [], className }: InfiniteScrollListProps) {
  const duplicatedItems = useMemo(() => {
    if (!items || !Array.isArray(items)) return []
    return [...items, ...items, ...items]
  }, [items])

  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const scrollSpeed = 30 // Pixels per second
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000 // Convert to seconds
      lastTime = currentTime

      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - scrollSpeed * deltaTime
        const listHeight = items.length * 40 // Approximate height per item

        // Reset position when we've scrolled one full set of items
        if (Math.abs(newPosition) >= listHeight) {
          return 0
        }
        return newPosition
      })

      animationId = requestAnimationFrame(animate)
    }

    let animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [items.length])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translate3d(0, ${scrollPosition}px, 0)`,
          willChange: 'transform',
        }}
        className="space-y-4"
      >
        {duplicatedItems.map((service, index) => {
          const Icon = service.icon
          if (!Icon || (typeof Icon !== 'function' && typeof Icon !== 'object')) {
            return (
              <div key={index} className="flex items-center gap-3 text-stone-600 w-72">
                <span className="truncate">{service.text}</span>
              </div>
            )
          }
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 text-stone-600 w-72"
            >
              <Icon className="shrink-0 h-5 w-5 text-brand-600" />
              <span className="truncate">{service.text}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
