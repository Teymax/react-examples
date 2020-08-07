import React from 'react'
import { MultiFormHeader, FormProgressBar, MultiFormNav } from '../MultiForm'
import { FormInput } from '@components/UI'

const RegisterFormConfirmLocation = ({ next, step, formik }) => {
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
            label={'Social Security Number'}
            name='securityNumber'
            placeholder='Social Security Number'
            formik={formik}
          />
        </div>
      </div>

      <MultiFormNav actions={{ next }} isActive={true} isFinalStep formik={formik} />
    </>
  )
}

export default RegisterFormConfirmLocation
