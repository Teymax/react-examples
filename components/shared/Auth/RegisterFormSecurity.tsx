import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { IRegisterFormState } from 'pages'
import { FormInput } from '@components/UI'

const RegisterFormSecurity = ({
  actions: { next },
  step,
  security,
  handleChange,
}: IRegisterFormState) => {
  return (
    <div className='form'>
      <div className='form__top'>
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
      </div>

      <MultiFormNav actions={{ next }} isActive={true} isFinalStep />
    </div>
  )
}

export default RegisterFormSecurity
