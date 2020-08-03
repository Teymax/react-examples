import React from 'react'
import { MultiFormHeader } from '../MultiForm'
import RegisterLocationSvg from '../../../public/img/register_location.svg'

const RegisterFormConfirmLocation = ({ next }) => {
  return (
    <div className='form'>
      <MultiFormHeader
        title={'Oh! One last thing'}
        subtitle={
          <>
            You’ll need to install our location validator,{' '}
            <a className='form__learn_more'>Learn More</a>
          </>
        }
      />

      <div className='form__body'>
        <div className='form__sketch'>
          <RegisterLocationSvg />
        </div>
        <div className='form__btn-action'>
          <button className='btn btn--primary'>Download Location Validator</button>
        </div>

        <div className='form__btn-action'>
          <button
            className='btn btn--secondary'
            onClick={next}
            style={{ marginTop: 20 }}
          >
            Check data
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterFormConfirmLocation
