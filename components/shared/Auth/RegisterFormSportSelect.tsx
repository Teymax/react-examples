import React from 'react'
import SportCards, { ISportType } from './SportCards'
import { IRegisterFormState } from 'pages'
import { MultiFormNav, FormProgressBar, MultiFormHeader } from '../MultiForm'

const RegisterFormSportSelect = ({
  actions: { next },
  sportTypes,
  onSportTypeChange,
  step,
}: IRegisterFormState & { onSportTypeChange: any }) => {
  const changeSportTypeHandler = (sportType: ISportType) => {
    if (sportTypes.find(item => item.name === sportType.name)) {
      return onSportTypeChange(
        sportTypes.filter(item => item.name !== sportType.name),
      )
    }

    return onSportTypeChange([...sportTypes, sportType])
  }

  return (
    <div className='form'>
      <div className='form__top'>
        <FormProgressBar step={step} />
        <MultiFormHeader
          title={'What are you favorite sports?'}
          subtitle={
            'We’ll use your slections to create a one of a king gaming experience'
          }
        />

        <div className='form__body'>
          <SportCards
            sportTypes={sportTypes}
            onChange={changeSportTypeHandler}
          />
        </div>
      </div>

      <MultiFormNav actions={{ next }} isActive={!!sportTypes.length} />
    </div>
  )
}

export default RegisterFormSportSelect
