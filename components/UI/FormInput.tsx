import React from 'react'
import classNames from 'classnames'
import SuccessMarkSvg from '../../public/img/success_mark.svg'
import ErrorMarkSvg from '../../public/img/error_mark.svg'

const getIcon = (status: 'error' | 'success' | '') => {
  switch (status) {
    case 'error':
      return <ErrorMarkSvg />

    case 'success':
      return <SuccessMarkSvg />
    default:
      break
  }
}

const FormInputValidationIcon = ({
  status = '',
}: {
  status?: 'error' | 'success' | ''
}) => <div className={classNames('field__icon', status)}>{getIcon(status)}</div>

const defStatus = 'error'
function FormInput({
  status = defStatus,
  label,
  ...inputProps
}: {
  status?: any
  label: string
} & React.HTMLProps<HTMLInputElement>) {
  return (
    <div className={classNames('field', status)}>
      <label htmlFor='' className='field__label'>
        {label}
      </label>
      <div className='field__wrap'>
        <input {...inputProps} className='field__input' />
        <FormInputValidationIcon status={status} />
      </div>
    </div>
  )
}

export default FormInput
