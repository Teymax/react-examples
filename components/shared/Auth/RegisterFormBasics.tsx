import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { IRegisterFormState } from 'pages'
import { FormInput } from '@components/UI'

const RegisterFormBasics = ({
  actions: { next },
  step,
  basic,
  handleChange,
}: IRegisterFormState) => {
  return (
    <div className='form'>
      <div className='form__top'>
        <FormProgressBar step={step} />
        <MultiFormHeader
          title={'Let’s confirm some details'}
          subtitle={<>Lets get the basics setup to get you playing!</>}
        />

        <div className='form__body'>
          <FormInput
            label={'First name'}
            name='firstName'
            onChange={handleChange}
            value={basic.firstName}
          />
          <FormInput
            label={'Last name'}
            name='lastName'
            onChange={handleChange}
            value={basic.lastName}
          />
          <FormInput
            label={'Date of Birth'}
            name='birthDate'
            onChange={handleChange}
            value={basic.birthDate}
          />
          <FormInput
            label={'Zipcode'}
            name='zipCode'
            onChange={handleChange}
            value={basic.zipCode}
          />
        </div>
      </div>

      <MultiFormNav actions={{ next }} isActive={true} />
    </div>
  )
}

export default RegisterFormBasics
