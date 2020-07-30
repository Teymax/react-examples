import React from 'react'
import classNames from 'classnames'

export interface ISportType {
  name: string
}

const SportCard = ({
  sportType,
  isActive,
  onChange,
}: {
  sportType: ISportType
  isActive: boolean
  onChange: (sportType: ISportType) => void
}) => (
  <div
    className={classNames('sport-card', {
      active: isActive,
    })}
    onClick={() => onChange(sportType)}>
    <div className='sport-card__icon'>
      <img
        src={`/img/sport_types/${sportType.name}.png`}
        alt={sportType.name}
      />
    </div>
    <div className='sport-card__info title title_body2'>{sportType.name}</div>
  </div>
)

const sportTypesValue: ISportType[] = [
  { name: 'basketball' },
  { name: 'hockey' },
  { name: 'soccer' },
  { name: 'football' },
  { name: 'tennis' },
  { name: 'basketball' },
]

const SportCards = ({
  sportTypes,
  onChange,
}: {
  sportTypes: ISportType[]
  onChange: (sportType: ISportType) => void
}) => {
  return (
    <div className='sport-cards'>
      {sportTypesValue.map((item, index) => (
        <SportCard
          onChange={onChange}
          isActive={
            !!sportTypes.find(sportType => item.name === sportType.name)
          }
          sportType={item}
          key={index}
        />
      ))}
    </div>
  )
}

export default SportCards
