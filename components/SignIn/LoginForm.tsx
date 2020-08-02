import React from 'react'
import LoginFormBase from './LoginFormBase'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export interface FormikLoginProps {
  email: string
  password: string
}

function LoginForm() {
  const formik = useFormik<FormikLoginProps>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('The field is required'),
      password: Yup.string()
        .min(6, 'At least 6 characters')
        .required('The field is required'),
    }),
    onSubmit(value) {},
  })

  return <LoginFormBase formik={formik} />
}

export default LoginForm
