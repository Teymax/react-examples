import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { FormInput } from '@components/UI'
import { IMultiForm } from '@components/SignUp/RegistrationMultiFormBase'
import { IRegisterFormState } from '@components/SignUp/RegistrationMultiForm'

const RegisterFormSecurity = ({
  actions: { next },
  step,
  security,
  handleChange,
  formik,
}: IMultiForm & IRegisterFormState) => {
  return (
    <div className='form'>
      <FormProgressBar step={step} />
      <MultiFormHeader
        title={'Security Information'}
        subtitle={<>Security is a priority for us.</>}
      />

      <div className='form__body'>
        <FormInput
          label={'Email'}
          name='email'
          type='email'
          value={security.email}
          onChange={handleChange}
        />

        <FormInput
          label={'Password'}
          name='password'
          type='password'
          value={security.password}
          onChange={handleChange}
        />
      </div>

      <MultiFormNav actions={{ next }} isActive={formik.isValid} isFinalStep />
    </div>
  )
}

export default RegisterFormSecurity
