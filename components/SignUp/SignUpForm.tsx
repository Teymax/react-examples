import React from 'react'
import { useFormik } from 'formik'
import SignUpFormBase from './SignUpFormBase'
import * as Yup from 'yup'
import { userService } from '@services'
import subYears from 'date-fns/subYears'

export interface IRegisterProps {
  email: string
  password: string
  username: string
  firstName: string
  lastName: string
  state: string
  birthDate: string
  isOffersChecked: boolean
}

const SignUpForm = () => {
  const formik = useFormik<IRegisterProps>({
    initialValues: {
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
      state: '',
      birthDate: '',
      isOffersChecked: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('The field is required'),
      password: Yup.string()
        .min(3, 'Longer then 3 characters')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        )
        .required('The field is required'),
      firstName: Yup.string()
        .min(3, 'Longer then 3 characters')
        .required('The field is required'),
      username: Yup.string()
        .min(3, 'Longer then 3 characters')
        .required('The field is required'),
      lastName: Yup.string()
        .min(3, 'Longer then 3 characters')
        .required('The field is required'),
      state: Yup.string()
        .min(3, 'Longer then 3 characters')
        .required('The field is required'),
      birthDate: Yup.date()
        .min(new Date(0, 0, 1920))
        .max(subYears(new Date(), 21), 'Less than 21 year')
        .required('The field is required'),
      isOffersChecked: Yup.boolean(),
    }),
    onSubmit(value) {
      userService.register(value)
    },
  })

  return <SignUpFormBase formik={formik} />
}

export default SignUpForm
