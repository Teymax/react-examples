import React from 'react';
import { MultiFormNav, MultiFormHeader, FormProgressBar } from '../MultiForm';
import { FormInput } from '@components/UI';
import { IMultiForm } from '@components/SignUp/RegistrationMultiFormBase';
import { IRegisterFormState } from '@components/SignUp/RegistrationMultiForm';

const RegisterFormSecurity = ({
  actions: { next },
  step,
  formik,
}: IMultiForm & IRegisterFormState) => {
  return (
    <>
      <FormProgressBar step={step} />

      <div className='form__img'></div>

      <div className='form__content'>
        <MultiFormHeader
          title={'Some details & Some Security'}
          subtitle={<>Let’s keep your account save & secure</>}
        />

        <div className='form__body'>
          <FormInput
            label={'First name'}
            name='firstName'
            placeholder='First Name'
            formik={formik}
          />

          <FormInput
            label={'Last name'}
            name='lastName'
            placeholder='Last Name'
            formik={formik}
          />

          <FormInput
            label={'Password'}
            name='password'
            type='password'
            placeholder='Password'
            formik={formik}
          />
        </div>

        <MultiFormNav
          isSkippable
          actions={{ next }}
          isActive={
            !formik.errors.firstName &&
            !formik.errors.lastName &&
            !formik.errors.password
          }
        />
      </div>
    </>
  );
};

export default RegisterFormSecurity;
