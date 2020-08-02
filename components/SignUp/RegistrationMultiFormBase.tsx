import React from 'react'
import { ISportType } from '@components/shared/Auth/SportCards'
import {
  RegisterFormSportSelect,
  RegisterFormBasics,
  RegisterFormLocation,
  RegisterFormSecurity,
  RegisterFormConfirmLocation,
} from '@components/shared'
import { IRegisterFormState } from './RegistrationMultiForm'
import { FormikProps } from 'formik'

export interface IMultiForm {
  step: number
  actions?: {
    prev: () => void
    next: () => void
  }
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  formik?: FormikProps<IRegisterFormState>
}

const RegistrationMultiFormBase = ({
  formik,
}: {
  formik: FormikProps<IRegisterFormState>
}) => {
  const [step, setStep] = React.useState<number>(1)

  const prev = () => setStep(step - 1)

  const next = () => setStep(step + 1)

  const changeFieldHandler = (formType: 'basic' | 'location' | 'security') => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fieldName = e.target.name

    formik.setFieldValue(formType, {
      ...formik.values[formType],
      [fieldName]: e.target.value,
    })
  }

  const dataToPass = React.useMemo(
    () => ({
      ...formik.values,
      formik,
      step,
      actions: { prev, next },
    }),
    [step, formik.values]
  )

  switch (step) {
    case 1:
      return (
        <RegisterFormSportSelect
          {...dataToPass}
          onSportTypeChange={(sportTypes: ISportType[]) =>
            formik.setFieldValue('sportTypes', sportTypes)
          }
        />
      )

    case 2:
      return (
        <RegisterFormBasics
          {...dataToPass}
          handleChange={changeFieldHandler('basic')}
        />
      )

    case 3:
      return (
        <RegisterFormLocation
          {...dataToPass}
          handleChange={changeFieldHandler('location')}
        />
      )

    case 4:
      return (
        <RegisterFormSecurity
          {...dataToPass}
          handleChange={changeFieldHandler('security')}
        />
      )

    case 5:
      return <RegisterFormConfirmLocation next={next} />

    default:
      return <pre>{JSON.stringify(formik.values, null, 4)}</pre>
  }
}

export default RegistrationMultiFormBase
