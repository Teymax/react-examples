import React from 'react'
import { AccountPointCards } from './PointCard'
import { AccountInfoItems } from './InfoItem'

const SectionAccountManagement = () => (
  <section className='section account'>
    <div className='container'>
      <h1 className='section__head title title_headline'>My Account</h1>

      <div className='account__point-cards'>
        <AccountPointCards />
      </div>

      <div className='account__info info'>
        <h3 className='info__title'>My information</h3>
        <div className='info__grid'>
          <AccountInfoItems />
        </div>

        <div className='info__action'>
          <button className='btn btn--secondary info__btn'>
            Edit my information
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default SectionAccountManagement
