import React from 'react'
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm'
import { IRegisterFormState } from 'pages'
import { FormInput } from '@components/UI'

const RegisterFormLocation = ({
  actions: { next },
  handleChange,
  step,
  location,
}: IRegisterFormState) => {
  return (
    <div className='form'>
      <div className='form__top'>
        <FormProgressBar step={step} />

        <MultiFormHeader
          title={'Location Information'}
          subtitle={
            <>
              This will let us k now if you are elligible to play in your state.
            </>
          }
        />

        <div className='form__body'>
          <FormInput
            label={'Address'}
            name='address'
            value={location.address}
            onChange={handleChange}
          />
          <FormInput
            label={'City'}
            name='city'
            value={location.city}
            onChange={handleChange}
          />
          <FormInput
            label={'State'}
            name='state'
            value={location.state}
            onChange={handleChange}
          />
        </div>
      </div>

      <MultiFormNav actions={{ next }} isActive={true} />
    </div>
  )
}

export default RegisterFormLocation
