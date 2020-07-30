import React from 'react'
import classNames from 'classnames'

const FormProgressBarItem = ({
  index,
  step,
}: {
  index: number
  step: number
}) => (
  <div className={classNames('progress__item')}>
    <div className={classNames('progress__dot', { active: step >= index })}>
      {index}
    </div>
    <div
      className={classNames('progress__line', { active: step > index })}></div>
  </div>
)

const FormProgressBar = ({ step }: { step: number }) => (
  <div className='form__progress progress'>
    <FormProgressBarItem step={step} index={1} />
    <FormProgressBarItem step={step} index={2} />
    <FormProgressBarItem step={step} index={3} />
    <FormProgressBarItem step={step} index={4} />
  </div>
)

export default FormProgressBar
