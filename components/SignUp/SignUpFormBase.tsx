import React from 'react';
import { FormInput } from '@components/UI';
import { FormikProps } from 'formik';
import { IRegisterProps } from './SignUpForm';
import EmailSvg from '../../public/img/mail.svg';
import LockSvg from '../../public/img/lock.svg';
import ProfileSvg from '../../public/img/profile.svg';
import CalendarSvg from '../../public/img/calendar.svg';

const SignUpFormBase = ({ formik }: { formik: FormikProps<IRegisterProps> }) => (
  <form className='sign-up-form form' onSubmit={formik.handleSubmit}>
    <div className='form__body'>
      <FormInput
        label={'E-mail'}
        formik={formik}
        name='email'
        placeholder='E-mail'
        type='email'
        icon={<EmailSvg />}
      />
      <FormInput
        label={'Password'}
        name='password'
        formik={formik}
        placeholder='Password'
        type='password'
        icon={<LockSvg />}
      />
      <FormInput
        label={'Username'}
        name='username'
        formik={formik}
        placeholder='Username'
        icon={<ProfileSvg />}
        type='username'
      />
      <div className='form__notation'>
        This will be used to identify you on the leaderboard
      </div>
      <FormInput
        label={'First name'}
        formik={formik}
        name='firstName'
        placeholder='First Name'
      />
      <FormInput
        label={'Last Name'}
        formik={formik}
        name='lastName'
        placeholder='Last Name'
      />
      <FormInput
        label={'State of residence'}
        formik={formik}
        name='state'
        placeholder='State of residence'
      />
      <div className='form__notation'>
        You must reside in one of the states listed above.
      </div>
      <FormInput
        formik={formik}
        label={'Date of birth'}
        name='birthDate'
        placeholder='Date of birth'
        icon={<CalendarSvg />}
      />
      <div className='form__notation'>
        You must be at least 21 years of age to register
      </div>

      <div className='form__checkbox form__notation'>
        <input
          type='checkbox'
          id='offers-check'
          checked={formik.values.isOffersChecked}
          onChange={() =>
            formik.setFieldValue('isOffersChecked', !formik.values.isOffersChecked)
          }
        />
        <label htmlFor='offers-check'>
          I'd like to hear about offers from Action 247.
        </label>
      </div>
    </div>

    <div className='form__footer'>
      <button type='submit' className='btn btn--primary btn--normal'>
        Get started!
      </button>
      <div className='form__terms'>
        by clicking in Get started you agree to our
        <br />
        <a className='terms-conditions link'>Terms & Conditions.</a>
      </div>
    </div>
  </form>
);

export default SignUpFormBase;
