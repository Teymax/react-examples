import React from 'react';
import LoginFormBase from './LoginFormBase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authActions } from '@store/actions';

export interface FormikLoginProps {
  email: string;
  password: string;
}

function LoginForm({ onFinish }: any) {
  const dispatch = useDispatch();

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
    onSubmit(value) {
      const loginData = {
        username: value.email,
        password: value.password,
      };

      (dispatch(authActions.loginRequest(loginData)) as any).then(onFinish);
    },
  });

  return <LoginFormBase formik={formik} />;
}

export default LoginForm;
