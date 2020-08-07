import React from 'react'
import RegistrationMultiFormBase from './RegistrationMultiFormBase'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { userService } from '@services'

export interface IRegisterFormState {
  email: string
  birthDate: string
  zipCode: string
  firstName: string
  lastName: string
  password: string
  username: string
  favouriteSports: Array<string>
  favouriteTeams: Array<string>
  address: string
  city: string
  zip: string
  phoneNumber: string
  securityNumber: string
}

function RegistrationMultiForm() {
  const formik = useFormik<IRegisterFormState>({
    initialValues: {
      email: '',
      birthDate: '',
      zipCode: '',
      firstName: '',
      password: '',
      lastName: '',
      username: '',
      favouriteSports: [],
      favouriteTeams: [],
      address: '',
      city: '',
      phoneNumber: '',
      zip: '',
      securityNumber: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('The field is required'),
      birthDate: Yup.string()
        .min(3, 'At least 3 characters')
        .required('The field is required'),
      zipCode: Yup.string()
        .min(3, 'At least 3 characters')
        .required('The field is required'),
      password: Yup.string()
        .min(6, 'Password must be at least six character long')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        )
        .required('The field is required'),
      firstName: Yup.string().min(3, 'At least 3 characters'),
      lastName: Yup.string().min(3, 'At least 3 characters'),
      username: Yup.string().min(3, 'At least 3 characters'),
      // favouriteSports: Yup.array().min(1, 'Select at least one type of sport'),
      // favouriteTeams: Yup.array().min(1, 'Select at least one type of sport'),
      address: Yup.string().min(3, 'At least 3 characters'),
      city: Yup.string().min(3, 'At least 3 characters'),
      zip: Yup.string()
        .min(3, 'At least 3 characters')
        .required('The field is required'),
      phoneNumber: Yup.string().min(3, 'At least 3 characters'),
    }),
    onSubmit(value) {
      const registerData = {
        username: value.email,
        password: value.password,
      }

      userService.register(registerData).then(console.log)
    },
  })

  return <RegistrationMultiFormBase formik={formik} />
}

export default RegistrationMultiForm
