'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

const formSchema = z.object({
  name: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır' }),
  email: z.string().email({ message: 'Geçerli bir email adresi giriniz' }),
  comment: z.string().min(10, { message: 'Yorum en az 10 karakter olmalıdır' }),
})

const comments = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    date: '6 Şubat 2024',
    comment:
      'Çok faydalı bir yazı olmuş, teşekkürler. Özellikle bakım sıklığı konusundaki bilgiler çok değerli.',
    replies: [
      {
        id: 2,
        name: 'İbrahim Yorulmaz',
        date: '6 Şubat 2024',
        comment:
          'Yorumunuz için teşekkürler. Bakımın önemi konusunda farkındalık yaratmak bizim için çok önemli.',
      },
    ],
  },
  {
    id: 3,
    name: 'Ayşe Kaya',
    date: '5 Şubat 2024',
    comment: 'Kombimin bakım zamanı gelmişti, tam zamanında okudum. Hemen randevu alacağım.',
    replies: [],
  },
]

export function Comments() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      comment: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Handle form submission
    console.log(values)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-stone-900">
            Yorumlar ({comments.length})
          </h2>

          {/* Comments List */}
          <div className="mb-12 space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-stone-900">{comment.name}</h3>
                        <time className="text-sm text-stone-600">{comment.date}</time>
                      </div>
                    </div>
                    <p className="text-stone-600">{comment.comment}</p>
                  </CardContent>
                </Card>

                {/* Replies */}
                {comment.replies.map((reply) => (
                  <Card key={reply.id} className="ml-8 border-l-4 border-l-brand-600">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-stone-900">{reply.name}</h3>
                          <time className="text-sm text-stone-600">{reply.date}</time>
                        </div>
                      </div>
                      <p className="text-stone-600">{reply.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-6 text-xl font-semibold text-stone-900">Yorum Yazın</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>İsminiz</FormLabel>
                          <FormControl>
                            <Input placeholder="İsminizi giriniz" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Adresiniz</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="ornek@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Yorumunuz</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Yorumunuzu yazın..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
