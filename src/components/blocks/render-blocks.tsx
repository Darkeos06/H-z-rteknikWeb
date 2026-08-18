import React from 'react'
import { Page } from '@/payload-types'
import AboutSectionBlock from '../sections/about-section'
import ServicesSection from '../sections/services-section'
import { WhyChooseUs } from '../sections/why-choose-us'
import FeatureGridBlock from './FeatureGrid/Component'
import TestimonialsSection from '../sections/testimonials-section'
import CallToActionBlock from './CallToAction/Component'

export function Blocks({ blocks }: { blocks: Page['blocks'] }) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        const { blockType } = block

        if (!blockType) return null

        switch (blockType) {
          case 'about-section':
            return <AboutSectionBlock key={index} {...block} />
          case 'services-section':
            return <ServicesSection key={index} {...(block as any)} />
          case 'why-choose-us':
            return <WhyChooseUs key={index} {...(block as any)} />
          case 'feature-grid':
            return <FeatureGridBlock key={index} {...(block as any)} />
          case 'testimonials':
            return <TestimonialsSection key={index} {...(block as any)} />
          case 'call-to-action':
            return <CallToActionBlock key={index} {...(block as any)} />
          default:
            return null
        }
      })}
    </>
  )
}
