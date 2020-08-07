import React from 'react'
import ArrowRightSvg from '../../../public/img/arrow_right.svg'
import classNames from 'classnames'
import { FormikProps } from 'formik'

const MultiFormNav = ({
  actions: { next },
  isActive,
  isFinalStep = false,
  formik,
  toSendSubmit = false,
}: {
  isActive: boolean
  isFinalStep?: any
  formik?: FormikProps<any>
  actions: any
  toSendSubmit?: boolean
}) => (
  <div className='form__btns'>
    <button
      className={classNames('btn form__btn form__btn--next', {
        active: isActive,
        'form__btn--final': isFinalStep,
      })}
      disabled={!isActive}
      type={'submit'}
      onClick={
        isFinalStep
          ? (formik.handleSubmit as any)
          : toSendSubmit
          ? (e: any) => {
              formik.handleSubmit(e)
              next(e)
            }
          : null
      }
    >
      {isFinalStep ? 'Finalize' : 'Next'}
      <span className='next-icon'>
        <ArrowRightSvg />
      </span>
    </button>

    <button className='btn form__btn--skip' onClick={next}>
      Skip
    </button>
  </div>
)

export default MultiFormNav
