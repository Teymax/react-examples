import React from 'react'
import { AccountPointCards } from './PointCard'
import { AccountInfoItems } from './InfoItem'
import classNames from 'classnames'

const SectionAccountManagement = () => {
  const [isFormActive, setIsFormActive] = React.useState(false)

  return (
    <section className='section account'>
      <div className='container'>
        <h1 className='section__head title title_headline'>My Account</h1>

        <div className='account__point-cards'>
          <AccountPointCards />
        </div>

        <div className='account__info info'>
          <h3 className='info__title'>My information</h3>
          <form
            onSubmit={() => setIsFormActive(false)}
            className={classNames('account__form info__grid', {
              active: isFormActive,
            })}
          >
            <AccountInfoItems />
            <div className='info__action'>
              <button
                className='btn btn--secondary info__btn'
                onClick={(e: any) =>
                  e.preventDefault() || setIsFormActive(!isFormActive)
                }
              >
                {isFormActive ? 'Save' : 'Edit my information'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SectionAccountManagement
