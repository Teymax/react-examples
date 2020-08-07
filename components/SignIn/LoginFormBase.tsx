import React from 'react'
import { MultiFormHeader } from '@components/shared'
import { FormInput } from '@components/UI'
import { FormikProps } from 'formik'
import { FormikLoginProps } from './LoginForm'

function LoginFormBase({ formik }: { formik: FormikProps<FormikLoginProps> }) {
  return (
    <form className='form form-login' onSubmit={formik.handleSubmit}>
      <div className='form__img'></div>
      <div className='form__content'>
        <MultiFormHeader
          title={'Login into your account'}
          subtitle={<>Provide your auth info.</>}
        />

        <div className='form__body'>
          <FormInput
            label={'Email'}
            name='email'
            placeholder='Your email'
            type='email'
            formik={formik}
          />

          <FormInput
            label={'Password'}
            name='password'
            placeholder='Password'
            type='password'
            formik={formik}
          />
        </div>

        <div className='form__btns'>
          <button
            className='btn btn--primary form__btn'
            disabled={!formik.dirty || !formik.isValid}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginFormBase
