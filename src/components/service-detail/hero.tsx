import Image from 'next/image'

interface ServiceHeroProps {
  title: string
  tagline: string
  image: string
}

export function ServiceHero({ title, tagline, image }: ServiceHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Image src={image} alt={title} fill className="object-cover brightness-50" priority />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 text-center text-white md:px-0">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-200 md:text-xl">{tagline}</p>
        </div>
      </div>
    </section>
  )
}
