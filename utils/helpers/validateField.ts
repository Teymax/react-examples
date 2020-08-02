import { FormikValues } from 'formik'

export const validateField = (
  key: string,
  { touched, errors }: FormikValues,
) => {
  if (!touched[key]) {
    return ''
  } else if (touched[key] && errors[key]) {
    return 'error'
  }

  return 'success'
}
