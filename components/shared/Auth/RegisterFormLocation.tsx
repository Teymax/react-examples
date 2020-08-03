import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { FormInput } from '@components/UI'
import { IMultiForm } from '@components/SignUp/RegistrationMultiFormBase'
import { IRegisterFormState } from '@components/SignUp/RegistrationMultiForm'

const RegisterFormLocation = ({
  actions: { next },
  handleChange,
  step,
  location,
}: IMultiForm & IRegisterFormState) => {
  return (
    <div className='form'>
      <FormProgressBar step={step} />

      <MultiFormHeader
        title={'Location Information'}
        subtitle={
          <>This will let us k now if you are elligible to play in your state.</>
        }
      />

      <div className='form__body'>
        <FormInput
          label={'Address'}
          name='address'
          value={location.address}
          onChange={handleChange}
        />
        <FormInput
          label={'City'}
          name='city'
          value={location.city}
          onChange={handleChange}
        />
        <FormInput
          label={'State'}
          name='state'
          value={location.state}
          onChange={handleChange}
        />
      </div>

      <MultiFormNav actions={{ next }} isActive={true} />
    </div>
  )
}

export default RegisterFormLocation
