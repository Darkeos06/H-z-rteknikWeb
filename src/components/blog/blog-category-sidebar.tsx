import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PostCategory, ServiceCategory } from '@/payload-types'

interface CategorySidebarProps {
  currentCategory: string
}

export async function CategorySidebar({ currentCategory }: CategorySidebarProps) {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    limit: 100,
    depth: 1,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const posts = result.docs

  const postCategories = posts.map((post) => post.post_category)
  const postServiceCategories = posts.map((post) => post.related_service_category)

  const categories = postCategories
    .filter((category, index, array) => array.indexOf(category) === index)
    .map((category) => {
      const cat = category as PostCategory
      return {
        name: cat.title,
        // @ts-expect-error @ts-ignore
        count: postCategories.filter((c) => c.title === cat.title).length,
        slug: cat.slug,
        subcategories: Array.from(
          new Set(
            posts
              // @ts-expect-error @ts-ignore
              .filter((post) => post.post_category.id === cat.id)
              // @ts-expect-error @ts-ignore
              .map((post) => post.related_service_category.title),
          ),
        ).map((title) => {
          const serviceCategory = postServiceCategories.find(
            // @ts-expect-error @ts-ignore
            (c) => c.title === title,
          ) as ServiceCategory
          return {
            name: serviceCategory.title,
            slug: serviceCategory.slug,
            count: posts.filter(
              (post) =>
                // @ts-expect-error @ts-ignore
                post.related_service_category.title === title && post.post_category.id === cat.id,
            ).length,
          }
        }),
      }
    })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kategoriler</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories?.map((category) => (
            <div key={category.slug} className="space-y-2">
              <div
                className={`flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-slate-100 ${
                  currentCategory === category.slug
                    ? 'bg-brand-50 text-brand-600 hover:bg-brand-50'
                    : 'text-slate-900'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-slate-600">({category.count})</span>
              </div>
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/blog-kategori/${sub.slug}`}
                  className={`ml-4 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-slate-100 ${
                    currentCategory === sub.slug
                      ? 'bg-brand-50 text-brand-600 hover:bg-brand-50'
                      : 'text-slate-600'
                  }`}
                >
                  <ChevronRight className="h-3 w-3" />
                  <span>{sub.name}</span>
                  <span className="ml-auto">({sub.count})</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
