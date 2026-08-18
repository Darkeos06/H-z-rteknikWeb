'use client'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/blocks/RichText'
import { Button } from '@/components/ui/button'

import { buildInitialFormState } from './buildInitialFormState'
import { fields } from './fields'
import { getClientSideURL } from '@/lib/getURL'
import { cn } from '@/lib/utils'
import { IconCircleCheck } from '@tabler/icons-react'
import { MessageSquare } from 'lucide-react'

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Property | Property[]
}

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: {
    [k: string]: unknown
  }[]
}

export const FormBlock: React.FC<
  {
    id?: string
    className?: string
    isInHomePage?: boolean
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    introContent,
    className,
    isInHomePage,
  } = props

  if (!formFromProps || typeof formFromProps !== 'object') {
    return null
  }

  const { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = formFromProps

  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFromProps.fields || []),
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)
          formMethods.reset()
          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType, formMethods],
  )

  return (
    <div
      className={cn(
        'container bg-stone-900/95 text-white border border-stone-800 shadow-2xl lg:max-w-[48rem] p-4 md:p-6 rounded-2xl backdrop-blur-xl',
        !isInHomePage && 'my-12 md:my-16 p-4 md:p-6',
        className,
      )}
    >
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="mb-4 text-stone-300" content={introContent as any} enableGutter={false} />
      )}
      
      {isInHomePage && (
        <div className="space-y-3 mb-5 text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400">
            HIZLI KEŞİF & TEKLİF TALEBİ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Anında Servis Çağır
          </h2>
          <p className="text-xs text-stone-300">
            Formu doldurun veya WhatsApp&apos;tan 7/24 direkt yazın.
          </p>

          {/* Direct WhatsApp Redirection Button */}
          <a
            href="https://wa.me/905407751250?text=Merhaba%2C%207%2F24%20Acil%20ve%20Ke%C5%9Fif%20Servis%20Talebi%20i%C3%A7in%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-lg transition-all border border-emerald-400/30 group mt-2"
          >
            <MessageSquare className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
            <span>WhatsApp ile Hızlı Servis / Teklif Al (7/24)</span>
          </a>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-stone-800" />
            <span className="flex-shrink mx-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">veya Formu Doldurun</span>
            <div className="flex-grow border-t border-stone-800" />
          </div>
        </div>
      )}

      <div>
        <FormProvider {...formMethods}>
          {isLoading && !hasSubmitted && <p className="text-xs text-blue-400">Gönderiliyor, Lütfen bekleyiniz...</p>}
          {error && <div className="text-xs text-red-400">{`${error.status || '500'}: ${error.message || ''}`}</div>}
          {/* // @ts-expect-error @ts-ignore */}
          <form id={formID} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap items-center !max-sm:[&>*]:max-w-full [&>*]:w-full [&>*]:px-0.5 [&>*]:px-2 [&>*]:py-2 mb-4 last:mb-0">
              {formFromProps &&
                formFromProps.fields &&
                formFromProps.fields?.map((field, index) => {
                  const Field: React.FC<any> = fields?.[field.blockType]
                  if (Field) {
                    return (
                      <Field
                        key={index}
                        form={formFromProps}
                        {...field}
                        {...formMethods}
                        control={control}
                        errors={errors}
                        register={register}
                      />
                    )
                  }
                  return null
                })}
            </div>
            <Button
              form={formID}
              type="submit"
              variant="default"
              size={'lg'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg transition-all"
            >
              {submitButtonLabel || 'Formu Gönder'}
            </Button>
            {!isLoading && hasSubmitted && confirmationType === 'message' && (
              <div className="flex space-x-2 bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-4 text-xs text-emerald-300 mt-4">
                <IconCircleCheck className="shrink-0 w-5 h-5 text-emerald-400" />
                <RichText content={confirmationMessage} className="" />
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
