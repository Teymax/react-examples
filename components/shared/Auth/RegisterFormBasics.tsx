import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { FormInput } from '@components/UI'
import { IMultiForm } from '@components/SignUp/RegistrationMultiFormBase'
import { IRegisterFormState } from '@components/SignUp/RegistrationMultiForm'

const RegisterFormBasics = ({
  actions: { next },
  step,
  formik,
}: IRegisterFormState & IMultiForm) => {
  return (
    <>
      <FormProgressBar step={step} />

      <div className='form__img'></div>

      <div className='form__content'>
        <MultiFormHeader
          title={'Let’s get the basics'}
          subtitle={<>We’ll need a little informations to get yoiu going.</>}
        />

        <div className='form__body'>
          <FormInput
            label={'Email'}
            name='email'
            type='email'
            formik={formik}
            placeholder='Your e-mail *'
          />

          <FormInput
            label={'Date of Birth'}
            name='birthDate'
            placeholder='Date of birth *'
            formik={formik}
          />

          <FormInput
            label={'Zipcode'}
            name='zipCode'
            placeholder='Zip *'
            formik={formik}
          />
        </div>

        <MultiFormNav
          actions={{ next }}
          isActive={
            !formik.errors.zipCode &&
            !formik.errors.birthDate &&
            !formik.errors.email
          }
        />
      </div>
    </>
  )
}

export default RegisterFormBasics
