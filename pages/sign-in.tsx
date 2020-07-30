import React from 'react'
import { Modal } from '@components/shared'
import Head from 'next/head'
import { LoginForm } from '@components/SignIn'

function SignIn() {
  return (
    <>
      <Head>
        <title>ChalkLine | Sign In</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Modal>
        <LoginForm />
      </Modal>
    </>
  )
}

export default SignIn
