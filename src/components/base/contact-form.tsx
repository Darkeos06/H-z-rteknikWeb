'use client'

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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: '👤 İsminiz en az 2 karakter olmalı' })
    .max(50, { message: '👤 İsminiz çok uzun' }),
  phone: z
    .string()
    .min(10, { message: '📱 Lütfen geçerli bir telefon numarası girin (10 haneli)' })
    .regex(/^[0-9+\s()-]+$/, { message: '📱 Telefon numarası sadece rakam içermeli' }),
  message: z
    .string()
    .min(10, { message: '✍️ Mesajınız en az 10 karakter olmalı' })
    .max(500, { message: '✍️ Mesajınız çok uzun (maks 500 karakter)' }),
  kvkkConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: '🔒 Devam etmek için KVKK aydınlatma metnini onaylamalısınız',
    }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone: '',
      message: '',
      kvkkConsent: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Handle form submission
      console.log(values)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full bg-stone-100 border-none md:p-2 shadow-2xl shadow-stone-400/30">
      <CardHeader>
        <CardTitle className="text-2xl  text-stone-900">Keşif için Bize Yazın</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-stone-700">
                    İsminiz *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      autoComplete="name"
                      inputMode="text"
                      placeholder="Adınız Soyadınız"
                      className="bg-white text-sm h-10 md:h-12 rounded-sm border-none pl-4 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-stone-700">
                    Telefon Numaranız *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Telefon Numaranız Ör. 0555 xxx xx xx"
                      className="bg-white text-sm h-10 md:h-12 rounded-sm border-none pl-4 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-stone-700">
                    Mesajınız *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mesajınız..."
                      className="bg-white text-sm min-h-24 rounded-sm border-none pl-4 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kvkkConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-stone-300 bg-stone-50 p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal text-stone-700 cursor-pointer">
                      Kişisel verilerimin işlenmesine ilişkin{' '}
                      <Link
                        href="/kvkk"
                        target="_blank"
                        className="text-brand-700 hover:text-brand-800 underline font-medium"
                      >
                        KVKK Aydınlatma Metni
                      </Link>
                      &apos;ni okudum, anladım ve onaylıyorum. *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size={'lg'}
              disabled={isSubmitting}
              className="mr-auto bg-brand-700 hover:bg-brand-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                'Gönder'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
