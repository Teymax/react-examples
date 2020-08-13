import React from 'react'
import { FormikProps } from 'formik'

const AccountInfoItem = ({
  title,
  formik,
  metaName,
}: {
  title: string
  metaName: string
  formik: FormikProps<any>
}) => {
  return (
    <div className='info__item item'>
      <div className='item__title'>{title}</div>
      {/* <div className='item__value'>{value}</div> */}
      <input
        className='item__value account__input'
        onChange={formik.handleChange}
        name={metaName}
        value={formik.values[metaName]}
      />
    </div>
  )
}

export default AccountInfoItem
