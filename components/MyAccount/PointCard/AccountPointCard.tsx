import React from 'react'

const AccountPointCard = ({
  number,
  info,
}: {
  number: number
  info: string
}) => (
  <div className='point-card'>
    <h3 className='title title_big-display point-card__number'>{number}</h3>
    <div className='point-card__info'>{info}</div>
  </div>
)

export default AccountPointCard
