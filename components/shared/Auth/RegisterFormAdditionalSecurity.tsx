import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { FormInput } from '@components/UI'
import { IMultiForm } from '@components/SignUp/RegistrationMultiFormBase'
import { IRegisterFormState } from '@components/SignUp/RegistrationMultiForm'

const RegisterFormAdditionalSecurity = ({
  actions: { next },
  step,
  formik,
}: IMultiForm & IRegisterFormState) => {
  return (
    <>
      <FormProgressBar step={step} />

      <div className='form__img'></div>

      <div className='form__content'>
        <MultiFormHeader
          title={'Section Title'}
          subtitle={<>Let’s keep your account save & secure</>}
        />

        <div className='form__body'>
          <FormInput
            label={'Username'}
            name='username'
            placeholder='Username'
            formik={formik}
          />

          <FormInput
            formik={formik}
            label={'Favourite Sports'}
            name='favouriteSports'
            placeholder='Favourite Sports'
          />

          <FormInput
            label={'Favourite Teams'}
            name='favouriteTeams'
            placeholder='Favourite Teams'
            formik={formik}
          />

          <FormInput
            label={'Address'}
            name='address'
            placeholder='Address'
            formik={formik}
          />

          <FormInput label={'City'} name='city' placeholder='City' formik={formik} />

          <FormInput label={'Zip'} name='zip' placeholder='Zip' formik={formik} />

          <FormInput
            label={'Phone Number'}
            name='phoneNumber'
            placeholder='Phone Number'
            formik={formik}
          />
        </div>

        <MultiFormNav
          actions={{ next }}
          isActive={
            !formik.errors.phoneNumber &&
            !formik.errors.zip &&
            !formik.errors.password
          }
          toSendSubmit
          formik={formik}
        />
      </div>
    </>
  )
}

export default RegisterFormAdditionalSecurity
