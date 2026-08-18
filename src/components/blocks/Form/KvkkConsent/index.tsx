import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { useFormContext } from 'react-hook-form'
import { Checkbox as CheckboxUi } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'
import Link from 'next/link'

import { Error } from '../Error'
import { Width } from '../Width'

export const KvkkConsent: React.FC<
  CheckboxField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown
      }>
    >
    getValues: unknown
    register: UseFormRegister<FieldValues>
    setValue: unknown
  }
> = ({ name, errors, register, required: requiredFromProps, width }) => {
  const props = register(name, {
    required: requiredFromProps ? 'KVKK aydınlatma metnini onaylamalısınız' : false,
  })
  const { setValue } = useFormContext()

  return (
    <Width width={width}>
      <div className="flex flex-row items-start space-x-3 space-y-0 rounded-sm bg-white border-none p-4">
        <CheckboxUi
          id={name}
          {...props}
          onCheckedChange={(checked) => {
            setValue(props.name, checked)
          }}
        />
        <div className="space-y-1 leading-none">
          <Label
            htmlFor={name}
            className="text-xs font-normal text-muted-foreground cursor-pointer"
          >
            Kişisel verilerimin işlenmesine ilişkin{' '}
            <Link
              href="/kvkk"
              target="_blank"
              className="text-brand-700 hover:text-brand-800 underline font-medium"
            >
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni okudum, anladım ve onaylıyorum.
            {requiredFromProps && ' *'}
          </Label>
          {requiredFromProps && errors[name] && <Error />}
        </div>
      </div>
    </Width>
  )
}
