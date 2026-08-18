import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Post, Media, PostCategory } from '@/payload-types'
import { IconArrowRight } from '@tabler/icons-react'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  // Helper function to get image details
  const getImageDetails = (image: number | Media | null | undefined) => {
    if (typeof image === 'object' && image) {
      return {
        url: image.url || '',
        alt: image.alt,
      }
    }
    return null
  }

  // Helper function to get category details
  const getCategoryDetails = (category: number | PostCategory) => {
    if (typeof category === 'object') {
      return category.title
    }
    return ''
  }

  // Get image details
  const featuredImage = getImageDetails(post.featured_image)

  // Get category
  const category = getCategoryDetails(post.post_category)

  // Format date
  const formattedDate = new Date(post.createdAt).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // Generate slug from title if needed
  const slug = post.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

  return (
    <Card className="group h-full bg-[#F3F3F3] overflow-hidden shadow-md">
      {featuredImage?.url && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {category && (
            <div className="absolute left-4 bottom-4">
              <Badge variant={'secondary'} className="text-brand-600">
                {category}
              </Badge>
            </div>
          )}
        </div>
      )}
      <CardHeader className="space-y-2">
        <div className="text-sm text-stone-500">{formattedDate}</div>
        <h3 className="line-clamp-2 text-xl font-semibold text-stone-900">{post.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-stone-500">{post.description || ''}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-600"
        >
          Devamını Oku
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
