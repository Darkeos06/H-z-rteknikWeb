'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
  email: z.string().email({ message: 'Geçerli bir email adresi giriniz' }),
})

export function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Handle form submission
    console.log(values)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bültenimize Katılın</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-stone-600">
          En yeni blog yazılarımızdan ve teknik ipuçlarından haberdar olun.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email adresiniz"
                      type="email"
                      className="h-12  "
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
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Kaydediliyor...' : 'Abone Ol'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
