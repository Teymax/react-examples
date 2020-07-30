import React from 'react'
import { ISportType } from '@components/shared/Auth/SportCards'
import {
  RegisterFormSportSelect,
  RegisterFormBasics,
  RegisterFormLocation,
  RegisterFormSecurity,
  RegisterFormConfirmLocation,
} from '@components/shared'

interface IMultiForm {
  step: number
  actions?: {
    prev: () => void
    next: () => void
  }
  handleChange?: any
}

export interface IRegisterFormState extends IMultiForm {
  sportTypes: Array<ISportType>
  basic: {
    firstName: string
    lastName: string
    birthDate: string
    zipCode: string
  }
  location: {
    address: string
    city: string
    state: string
  }
  security: {
    email: string
    password: string
  }
}

const RegistrationMultiForm = () => {
  const [registerFormState, setRegisterFormState] = React.useState<
    IRegisterFormState
  >({
    step: 1,
    sportTypes: [],
    basic: {
      firstName: '',
      lastName: '',
      birthDate: '',
      zipCode: '',
    },
    location: {
      address: '',
      city: '',
      state: '',
    },
    security: {
      email: '',
      password: '',
    },
  })

  const prev = () =>
    setRegisterFormState({
      ...registerFormState,
      step: registerFormState.step - 1,
    })

  const next = () =>
    setRegisterFormState({
      ...registerFormState,
      step: registerFormState.step + 1,
    })

  const changeFieldHandler = (formType: 'basic' | 'location' | 'security') => (
    e: any,
  ) => {
    const fieldName = e.target.name

    setRegisterFormState({
      ...registerFormState,
      [formType]: {
        ...registerFormState[formType],
        [fieldName]: e.target.value,
      },
    })
  }

  switch (registerFormState.step) {
    case 1:
      return (
        <RegisterFormSportSelect
          {...registerFormState}
          actions={{ prev, next }}
          onSportTypeChange={(sportTypes: ISportType[]) =>
            setRegisterFormState({ ...registerFormState, sportTypes })
          }
        />
      )

    case 2:
      return (
        <RegisterFormBasics
          {...registerFormState}
          actions={{ prev, next }}
          handleChange={changeFieldHandler('basic')}
        />
      )

    case 3:
      return (
        <RegisterFormLocation
          {...registerFormState}
          actions={{ prev, next }}
          handleChange={changeFieldHandler('location')}
        />
      )

    case 4:
      return (
        <RegisterFormSecurity
          {...registerFormState}
          actions={{ prev, next }}
          handleChange={changeFieldHandler('security')}
        />
      )

    case 5:
      return <RegisterFormConfirmLocation next={next} />

    default:
      return <pre>{JSON.stringify(registerFormState, null, 4)}</pre>
  }
}

export default RegistrationMultiForm
