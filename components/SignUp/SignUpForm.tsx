import React from 'react'
import { useFormik } from 'formik'
import SignUpFormBase from './SignUpFormBase'

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
    onSubmit(value) {
      console.log(value)
    },
  })

  return <SignUpFormBase formik={formik} />
}

export default SignUpForm
