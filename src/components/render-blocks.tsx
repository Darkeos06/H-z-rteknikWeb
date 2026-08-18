import { Media, Page, Post, Project, Service, Testimonial } from '@/payload-types'
import Hero from './sections/home-hero'
import AboutSectionBlock from './blocks/about-section-block'
import WorkProcess from './sections/work-process'
import PortfolioSection from './sections/portfolio'
import TestimonialsSection from './sections/testimonials-section'
import BlogSection from './sections/blog-section'
import { CTA } from './blocks/cta'
import { GridSection } from './blocks/grid-section'
import CertificationsBlock from './blocks/certifications-block'
import { ImageGallery } from './blocks/image-gallery'
import { FAQ } from './blocks/faq'
import { Projects } from './blocks/projects'
import { TestimonialBlock } from './blocks/testimonials'
import RichText from './blocks/RichText'
import { PageHero } from './blocks/hero'
import ServicesSection from './sections/services-section'
import { FormBlock } from './blocks/Form/Component'
import { ServiceDescription } from './service-detail/description'
import { WhyChooseUs } from './sections/why-choose-us'

type BlockType = Page['blocks'][number] | Service['blocks'][number]

interface BlocksProps {
  blocks?: Page['blocks'] | Service['blocks']
}

export async function Blocks({ blocks }: BlocksProps) {
  if (!blocks) {
    return null
  }

  const renderBlock = async (block: BlockType) => {
    switch (block.blockType) {
      case 'home-hero-section':
        return (
          <Hero
            key={block.id}
            // @ts-expect-error @ts-ignore
            headingRotation={block.headingRotation}
            subHeading={block.subHeading}
            description={block.description}
            featuredServices={block.featuredServices}
            servicesLink={block.servicesLink}
            // @ts-expect-error @ts-ignore
            images={block.images}
            // @ts-expect-error @ts-ignore
            ctaForm={block.cta_form}
          />
        )

      case 'services-carousel':
        return (
          <ServicesSection
            key={block.id}
            // @ts-expect-error @ts-ignore
            heading={block.heading}
            viewAllLink={block.viewAllLink}
            // @ts-expect-error @ts-ignore
            services={block.services as Service[]}
          />
        )

      case 'about-section':
        return (
          <AboutSectionBlock
            key={block.id}
            // @ts-expect-error @ts-ignore
            content={block.content}
            certificateSource={block.certificateSource || 'inline'}
            certificates={block.certificates as any}
            collectionOptions={block.collectionOptions}
          />
        )

      case 'why-choose-us':
        return (
          <WhyChooseUs
            key={block.id}
            image={block.image as Media}
            // @ts-expect-error @ts-ignore
            content={block.content}
            features={block.features as any}
          />
        )

      case 'work-process':
        return (
          <WorkProcess
            key={block.id}
            // @ts-expect-error @ts-ignore
            header={block.header}
            description={block.description}
            // @ts-expect-error @ts-ignore
            processSteps={block.processSteps}
          />
        )

      case 'portfolio-section':
        return (
          <PortfolioSection
            key={block.id}
            // @ts-expect-error @ts-ignore
            header={block.header}
            description={block.description}
            featuredProjects={block.featuredProjects as Project[]}
          />
        )

      case 'testimonials-section':
        return (
          <TestimonialsSection
            key={block.id}
            // @ts-expect-error @ts-ignore
            header={block.header}
            viewAllButton={block.viewAllButton}
            featuredTestimonials={block.featuredTestimonials as Testimonial[]}
          />
        )

      case 'blog-section':
        return null

      case 'page-hero-block':
        return (
          <PageHero
            key={block.id}
            title={block.title as string}
            description={block.description as string}
            image={block.image as number | Media}
            impact={block.impact as any}
          />
        )

      case 'cta-block':
        return (
          <CTA
            key={block.id}
            heading={block.heading}
            description={block.description}
            buttonText={block.buttonText}
            buttonLink={block.buttonLink}
          />
        )

      case 'grid-section-block':
        return (
          <GridSection
            key={block.id}
            title={block.title}
            description={block.description}
            values={block.values as any}
          />
        )

      case 'certifications-block':
        return (
          <CertificationsBlock
            key={block.id}
            title={block.title}
            description={block.description}
            certificateSource={block.certificateSource || 'inline'}
            certificates={block.certificates as any}
            collectionOptions={block.collectionOptions}
          />
        )

      case 'image-gallery-block':
        return (
          <ImageGallery
            key={block.id}
            title={block.title as string}
            description={block.description as string}
            showTitle={block.showTitle as any}
            showCategories={block.showCategories as any}
            images={block.images as any}
          />
        )

      case 'faq-block':
        return (
          <FAQ
            key={block.id}
            title={block.title as string}
            subtitle={block.subtitle as string}
            variant={block.variant as any}
            faqs={block.faqs as any}
          />
        )

      case 'rich-text-block':
        return (
          <RichText
            key={block.id}
            content={block.content as any}
            enableGutter
            className="my-12 lg:my-24"
          />
        )

      case 'projects-block':
        return (
          <Projects
            key={block.id}
            title={block.title as string}
            description={block.description as string}
            items={block.items as any}
          />
        )

      case 'testimonials-block':
        return (
          <TestimonialBlock
            key={block.id}
            title={block.title as string}
            description={block.description as string}
            testimonials={block.testimonials as Testimonial[]}
          />
        )

      case 'service-description-block':
        // @ts-expect-error @ts-ignore
        return <ServiceDescription key={block.id} {...block} />

      case 'formBlock':
        // @ts-expect-error @ts-ignore
        return <FormBlock key={block.id} {...block} />

      default:
        return null
    }
  }

  const renderedBlocks = await Promise.all(blocks.map((block: BlockType) => renderBlock(block)))
  return <>{renderedBlocks}</>
}
