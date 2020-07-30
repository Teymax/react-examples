import React from 'react'
import { Modal } from '@components/shared'
import Head from 'next/head'
import { RegistrationMultiForm } from '@components/SignUp'

function SignUp() {
  return (
    <>
      <Head>
        <title>ChalkLine | SignUp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Modal>
        <RegistrationMultiForm />
      </Modal>
    </>
  )
}

export default SignUp
