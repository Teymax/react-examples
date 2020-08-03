import React from 'react'
import { Modal } from '@components/shared'
import Head from 'next/head'
import { LoginForm } from '@components/SignIn'
import { useModal } from '@hooks'

function SignIn() {
  const { showModal } = useModal(() => <LoginForm />)

  return (
    <>
      <Head>
        <title>ChalkLine | Sign In</title>
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

export default SignIn
