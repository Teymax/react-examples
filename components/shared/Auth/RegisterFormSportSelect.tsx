import React from 'react'
import SportCards from './SportCards'
import { MultiFormNav, FormProgressBar, MultiFormHeader } from '../MultiForm'
import { IMultiForm } from '@components/SignUp/RegistrationMultiFormBase'
import { IRegisterFormState } from '@components/SignUp/RegistrationMultiForm'

const RegisterFormSportSelect = ({
  actions: { next },
  onSportTypeChange,
  sportTypes,
  step,
}: any) => {
  const changeSportTypeHandler = (sportType: string) => {
    if (sportTypes.find((item) => item === sportType)) {
      return onSportTypeChange(sportTypes.filter((item) => item !== sportType))
    }

    return onSportTypeChange([...sportTypes, sportType])
  }

  return (
    <div className='form'>
      <FormProgressBar step={step} />

      <div className='form__content'>
        <MultiFormHeader
          title={'What are you favorite sports?'}
          subtitle={
            <>We’ll use your slections to create a one of a king gaming experience</>
          }
        />

        <div className='form__body'>
          <SportCards sportTypes={sportTypes} onChange={changeSportTypeHandler} />
        </div>

        <MultiFormNav actions={{ next }} isActive={!!sportTypes.length} />
      </div>
    </div>
  )
}

export default RegisterFormSportSelect
