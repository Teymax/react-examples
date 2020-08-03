import React from 'react'
import RegistrationMultiFormBase from './RegistrationMultiFormBase'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export interface IRegisterFormState {
  sportTypes: Array<string>
  basic: {
    firstName: string
    lastName: string
    birthDate: string
    zipCode: string
  }
  location: {
    address: string
    city: string
    state: string
  }
  security: {
    email: string
    password: string
  }
}

function RegistrationMultiForm() {
  const formik = useFormik<IRegisterFormState>({
    initialValues: {
      sportTypes: [],
      basic: {
        firstName: '',
        lastName: '',
        birthDate: '',
        zipCode: '',
      },
      location: {
        address: '',
        city: '',
        state: '',
      },
      security: {
        email: '',
        password: '',
      },
    },
    validationSchema: Yup.object({
      sportTypes: Yup.array().min(1, 'Select at least one type of sport'),
      security: Yup.object({
        email: Yup.string().email('Invalid email').required('The field is required'),
        password: Yup.string()
          .min(6, 'Password must be at least six character long')
          .required('The field is required'),
      }),
      basic: Yup.object({
        firstName: Yup.string().min(3, 'At least 3 characters'),
        lastName: Yup.string().min(3, 'At least 3 characters'),
      }),
    }),
    onSubmit(value) {},
  })

  return <RegistrationMultiFormBase formik={formik} />
}

export default RegistrationMultiForm
