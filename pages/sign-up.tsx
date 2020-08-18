import React from 'react';
import Head from 'next/head';
import { FormInput } from '@components/UI';
import SignUpFormBase from '@components/SignUp/SignUpFormBase';
import { useFormik } from 'formik';
import { SignUpForm } from '@components/SignUp';
import { DefaultThemeLayout } from '@components/shared';

const SignUpSection = () => (
  <section className='section sign-up-section'>
    <div className='container--section'>
      <div className='section__header'>
        <h1 className='section__head'>Create a new account</h1>
        <div className='sign-up-section__info'>
          Sign up with Action 247 for the latest information about legal sports
          betting in Tennessee, and we'll let you know when we have free sports games
          with great cash prizes.
        </div>
      </div>

      <div className='section section--highlight'>
        <SignUpForm />
      </div>
    </div>
  </section>
);

function SignUp() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>ChalkLine | Sign Up</title>
      </Head>

      <DefaultThemeLayout>
        <SignUpSection />
      </DefaultThemeLayout>
    </>
  );
}

export default SignUp;
