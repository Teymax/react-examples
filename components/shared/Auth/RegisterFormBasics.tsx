import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { FormInput } from '@components/UI'
import { IMultiForm } from '@components/SignUp/RegistrationMultiFormBase'
import { IRegisterFormState } from '@components/SignUp/RegistrationMultiForm'

const RegisterFormBasics = ({
  actions: { next },
  step,
  basic,
  formik,
  handleChange,
}: IRegisterFormState & IMultiForm) => {
  return (
    <div className='form'>
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
          onBlur={formik.handleBlur}
          value={basic.firstName}
          errorCheck={{
            errors: formik.errors.basic,
            touched: formik.touched,
          }}
        />

        <FormInput
          label={'Last name'}
          name='lastName'
          onChange={handleChange}
          onBlur={formik.handleBlur}
          value={basic.lastName}
          errorCheck={{
            errors: formik.errors.basic,
            touched: formik.touched,
          }}
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

      <MultiFormNav actions={{ next }} isActive={true} />
    </div>
  )
}

export default RegisterFormBasics
