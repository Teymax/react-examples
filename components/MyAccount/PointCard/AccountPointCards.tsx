import React from 'react'
import AccountPointCard from './AccountPointCard'

function AccountPointCards() {
  return (
    <>
      <AccountPointCard number={102} info={'Games played'} />
      <AccountPointCard number={23} info={'Correct picks'} />
      <AccountPointCard number={3} info={'Total points'} />
    </>
  )
}

export default AccountPointCards
