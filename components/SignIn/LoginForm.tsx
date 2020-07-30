import React from 'react'
import { MultiFormHeader } from '@components/shared'
import { FormInput } from '@components/UI'

function LoginForm() {
  return (
    <div className='form'>
      <div className='form__top'>
        <MultiFormHeader
          title={'Login into your account'}
          subtitle={<>Provide your auth info.</>}
        />

        <div className='form__body'>
          <FormInput
            status='success'
            label={'Email'}
            name='email'
            type='email'
          />
          <FormInput label={'Password'} name='password' type='password' />
        </div>
      </div>

      <div className='form__btns'>
        <button className='btn btn--primary form__btn'>Login</button>
      </div>
    </div>
  )
}

export default LoginForm
