import React from 'react'
import AccountInfoItem from './AccountInfoItem'

const infoItems = [
  {
    title: 'Email',
    value: 'admin@admin.com',
  },
  {
    title: 'Time zone',
    value: 'Central Time',
  },
  {
    title: 'Odds Format',
    value: 'U.S. Odds',
  },
  {
    title: 'Username',
    value: 'admin@admin.com',
  },
  {
    title: 'First Name',
    value: 'admin@admin.com',
  },
  {
    title: 'Last Name',
    value: 'admin@admin.com',
  },
  {
    title: 'State of residence',
    value: 'admin@admin.com',
  },
  {
    title: 'Birthdate',
    value: 'admin@admin.com',
  },
  {
    title: 'Receive Email Offers',
    value: 'admin@admin.com',
  },
]

function AccountInfoItems() {
  return (
    <>
      {infoItems.map((item) => (
        <AccountInfoItem title={item.title} value={item.value} key={item.title} />
      ))}
    </>
  )
}

export default AccountInfoItems
