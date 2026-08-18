import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'

export const Select: React.FC<
  SelectField & {
    control: Control<FieldValues, any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown
      }>
    >
  }
> = ({ name, control, errors, label, options, required, width }) => {
  return (
    <Width width={width}>
      <Label className="sr-only" htmlFor={name}>
        {label}
      </Label>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = options.find((t) => t.value === value)

          return (
            <SelectComponent onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
              <SelectTrigger
                className="bg-white w-full text-sm h-10 md:h-12 rounded-sm border-none pl-4 "
                id={name}
              >
                <SelectValue placeholder={label} />
              </SelectTrigger>
              <SelectContent>
                {options.map(({ label, value }) => {
                  return (
                    <SelectItem key={value} value={value} className="h-10 md:h-12 pl-4">
                      {label}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </SelectComponent>
          )
        }}
        rules={{ required }}
      />
      {required && errors[name] && <Error />}
    </Width>
  )
}
