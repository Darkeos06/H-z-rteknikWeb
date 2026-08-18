'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface Certificate {
  title: string
  date: string
  image: {
    url: string
    alt: string
  }
  description: string
  pdfUrl?: string
}

interface CertificateCardProps {
  certificate: Certificate
  onDownload?: (cert: Certificate) => void
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onDownload }) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={certificate.image.url}
          alt={certificate.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 text-sm font-medium text-brand-600">{certificate.date}</div>
        <h3 className="mb-2 text-lg font-semibold text-stone-900">{certificate.title}</h3>
        <p className="mb-4 text-sm text-stone-600">{certificate.description}</p>
        {certificate.pdfUrl && onDownload && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => onDownload(certificate)}
          >
            <Download className="mr-2 h-4 w-4" />
            Sertifikayı İndir
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

interface CertificationsProps {
  title?: string
  description?: string
  certificates?: Certificate[]
  className?: string
}

const defaultCertificates: Certificate[] = [
  {
    title: 'TSE Hizmet Yeterlilik Belgesi',
    date: '2023',
    image: {
      url: '/placeholder.svg',
      alt: 'TSE Hizmet Yeterlilik Belgesi',
    },
    description: 'Teknik servis hizmetleri yeterlilik sertifikası',
    pdfUrl: '/certificates/tse-hizmet-yeterlilik.pdf',
  },
  {
    title: 'ISO 9001:2015',
    date: '2022',
    image: {
      url: '/placeholder.svg',
      alt: 'ISO 9001:2015',
    },
    description: 'Kalite yönetim sistemi sertifikası',
    pdfUrl: '/certificates/iso-9001.pdf',
  },
  {
    title: 'Mesleki Yeterlilik Belgesi',
    date: '2023',
    image: {
      url: '/placeholder.svg',
      alt: 'Mesleki Yeterlilik Belgesi',
    },
    description: 'Elektrik tesisatı ve tadilat uzmanlık sertifikası',
    pdfUrl: '/certificates/mesleki-yeterlilik.pdf',
  },
]

export function Certifications({
  title = 'Sertifikalarımız',
  description = 'Kalite standartlarımızı belgeleyen sertifikalarımız.',
  certificates = defaultCertificates,
  className = '',
}: CertificationsProps) {
  const handleDownload = async (cert: Certificate) => {
    if (!cert.pdfUrl) return

    try {
      const response = await fetch(cert.pdfUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${cert.title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading certificate:', error)
    }
  }

  return (
    <section
      className={`w-full bg-white bg-gradient-to-t from-brand-700/5 via-white to-brand-700/5 py-12 md:py-24 ${className}`}
    >
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
          <p className="text-lg text-stone-600">{description}</p>
        </div>

        <div className="mt-12 md:mt-16">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <CertificateCard certificate={cert} onDownload={handleDownload} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
