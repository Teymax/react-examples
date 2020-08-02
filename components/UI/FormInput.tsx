import React from 'react'
import classNames from 'classnames'
import SuccessMarkSvg from '../../public/img/success_mark.svg'
import ErrorMarkSvg from '../../public/img/error_mark.svg'
import { validateField } from '@utils'

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

function FormInput({
  label = '',
  errorCheck = null,
  ...inputProps
}: {
  label?: string
  errorCheck?: { touched: any; errors: any }
} & React.HTMLProps<HTMLInputElement>) {
  const status = React.useMemo(
    () =>
      errorCheck &&
      validateField(inputProps.name, {
        errors: errorCheck.errors || {},
        touched: errorCheck.touched || {},
      }),
    [errorCheck]
  )

  return (
    <div className={classNames('field', status)}>
      <label htmlFor='' className='field__label'>
        {label}
      </label>
      <div className='field__wrap'>
        <input {...inputProps} className='field__input' />
        {errorCheck && <FormInputValidationIcon status={status} />}
      </div>
    </div>
  )
}

export default FormInput
