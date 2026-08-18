'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

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
    <section className="w-full bg-brand-700-5 py-12 md:py-24">
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Bültenimize Katılın
          </h2>
          <p className="text-lg text-stone-600 mt-4">
            En yeni blog yazılarımızdan ve teknik ipuçlarından haberdar olun.
          </p>

          <div className="mx-auto mt-8 md:mt-12 max-w-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4  sm:flex-row"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Email adresiniz"
                          type="email"
                          className="h-12 md:h-14"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-brand-600 hover:bg-brand-700"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Kaydediliyor...' : 'Abone Ol'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
