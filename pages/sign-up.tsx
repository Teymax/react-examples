import React from 'react'
import { Modal } from '@components/shared'
import Head from 'next/head'
import { RegistrationMultiForm } from '@components/SignUp'
import { useModal } from '@hooks'

function SignUp() {
  const { showModal } = useModal(() => <RegistrationMultiForm />)

  return (
    <>
      <Head>
        <title>ChalkLine | SignUp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center' }}>
        <button className='btn btn--primary btn--tiny' onClick={showModal}>
          Show
        </button>
      </div>
    </>
  )
}

export default SignUp
