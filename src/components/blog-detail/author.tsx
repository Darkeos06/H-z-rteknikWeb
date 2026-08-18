import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Author } from '@/payload-types'
import RichText from '../blocks/RichText'
import { IconMail } from '@tabler/icons-react'
import { icons } from '../base/icons'

export function AuthorInfo({ name, title, bio, photo, social, email }: Author) {
  return (
    <Card className="mb-12">
      <CardContent className="flex flex-col items-center gap-6 p-6 md:flex-row md:items-start">
        <Image
          src={typeof photo !== 'number' && 'url' in photo ? photo.url : '/avatar.jpg'}
          alt={typeof photo !== 'number' && 'url' in photo ? photo.alt : 'avatar'}
          width={120}
          height={120}
          className="rounded-full h-32 w-32 mb-auto grow-0 shrink-0"
        />
        <div className="space-y-4 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-stone-900">{name}</h3>
            <p className="text-brand-600">{title}</p>
          </div>
          {bio && <RichText content={bio as any} />}
          <div className="flex justify-center gap-4 md:justify-start">
            {Object.entries(social).map(([key, value]) => {
              const Icon = icons[key]
              return (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 transition-colors hover:text-brand-600"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{key}</span>
                </a>
              )
            })}
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 transition-colors hover:text-brand-600"
            >
              <IconMail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
