import React from 'react'
import classNames from 'classnames'
import SuccessMarkSvg from '../../public/img/success_mark.svg'
import ErrorMarkSvg from '../../public/img/error_mark.svg'
import { validateField } from '@utils'
import { FormikProps } from 'formik'

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
  formik,
  ...inputProps
}: {
  label?: string
  formik: FormikProps<any>
} & React.HTMLProps<HTMLInputElement>) {
  // const status = React.useMemo(() => validateField(inputProps.name, formik), [
  //   formik,
  // ])

  const status = null

  return (
    <div className={classNames('field', status)}>
      {/* {formik.values[inputProps.name] && (
        <label className='field__label'>{label}</label>
      )} */}
      <div className='field__wrap'>
        <input
          {...inputProps}
          className='field__input'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[inputProps.name]}
        />
        {/* {formik.errors && <FormInputValidationIcon status={status} />} */}
      </div>
    </div>
  )
}

export default FormInput
