import React from 'react'

const AccountInfoItem = ({
  title,
  value,
}: {
  title: string
  value: string
}) => (
  <div className='info__item item'>
    <div className='item__title'>{title}</div>
    <div className='item__value'>{value}</div>
  </div>
)

export default AccountInfoItem
