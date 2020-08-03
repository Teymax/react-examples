import React from 'react'
import { MultiFormHeader } from '@components/shared'
import { FormInput } from '@components/UI'
import { FormikProps } from 'formik'
import { FormikLoginProps } from './LoginForm'

function LoginFormBase({ formik }: { formik: FormikProps<FormikLoginProps> }) {
  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <MultiFormHeader
        title={'Login into your account'}
        subtitle={<>Provide your auth info.</>}
      />

      <div className='form__body'>
        <FormInput
          label={'Email'}
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          errorCheck={formik}
        />

        <FormInput
          label={'Password'}
          name='password'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          errorCheck={formik}
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
    </form>
  )
}

export default LoginFormBase
