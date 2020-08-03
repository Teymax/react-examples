import React from 'react'
import classNames from 'classnames'

const SportCard = ({
  sportType,
  isActive,
  onChange,
}: {
  sportType: string
  isActive: boolean
  onChange: (sportType: string) => void
}) => (
  <div
    className={classNames('sport-card', {
      active: isActive,
    })}
    onClick={() => onChange(sportType)}
  >
    <div className='sport-card__icon'>
      <img src={`/img/sport_types/${sportType}.png`} alt={sportType} />
    </div>
    <div className='sport-card__info title title_body2'>{sportType}</div>
  </div>
)

const sportTypesValue: string[] = [
  'basketball',
  'hockey',
  'soccer',
  'football',
  'tennis',
  'basketball',
]

const SportCards = ({
  sportTypes,
  onChange,
}: {
  sportTypes: string[]
  onChange: (sportType: string) => void
}) => {
  return (
    <div className='sport-cards'>
      {sportTypesValue.map((item, index) => (
        <SportCard
          onChange={onChange}
          isActive={!!sportTypes.find((sportType) => item === sportType)}
          sportType={item}
          key={index}
        />
      ))}
    </div>
  )
}

export default SportCards
