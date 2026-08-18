import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { useFormContext } from 'react-hook-form'

import { Checkbox as CheckboxUi } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'
import Link from 'next/link'

import { Error } from '../Error'
import { Width } from '../Width'

export const Checkbox: React.FC<
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
> = ({ name, defaultValue, errors, label, register, required: requiredFromProps, width }) => {
  const props = register(name, {
    required: requiredFromProps ? 'Bu alanı onaylamalısınız' : false,
  })
  const { setValue } = useFormContext()

  // Detect if this is a KVKK consent field
  const isKvkkField = name.toLowerCase().includes('kvkk') ||
                      (label && label.toLowerCase().includes('kvkk'))

  if (isKvkkField) {
    return (
      <Width width={width}>
        <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-stone-300 bg-stone-50 p-4">
          <CheckboxUi
            defaultChecked={defaultValue}
            id={name}
            {...props}
            onCheckedChange={(checked) => {
              setValue(props.name, checked)
            }}
          />
          <div className="space-y-1 leading-none">
            <Label htmlFor={name} className="text-sm font-normal text-stone-700 cursor-pointer">
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

  // Regular checkbox rendering
  return (
    <Width width={width}>
      <div className="flex items-center gap-2">
        <CheckboxUi
          defaultChecked={defaultValue}
          id={name}
          {...props}
          onCheckedChange={(checked) => {
            setValue(props.name, checked)
          }}
        />
        <Label htmlFor={name}>{label}</Label>
      </div>
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
