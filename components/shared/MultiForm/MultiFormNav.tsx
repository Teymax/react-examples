import React from 'react'
import ArrowRightSvg from '../../../public/img/arrow_right.svg'
import classNames from 'classnames'

const MultiFormNav = ({ actions: { next }, isActive, isFinalStep = false }) => (
  <div className='form__btns'>
    <button className='btn form__btn-skip' onClick={next}>
      Skip
    </button>
    <button
      className={classNames('btn form__btn-next', {
        active: isActive,
        'form__btn-final': isFinalStep,
      })}
      disabled={!isActive}
      onClick={next}>
      {isFinalStep ? 'Finalize' : 'Next'}
      <span className='next-icon'>
        <ArrowRightSvg />
      </span>
    </button>
  </div>
)

export default MultiFormNav
