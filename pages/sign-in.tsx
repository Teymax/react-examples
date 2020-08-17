import React from 'react'
import { Modal, DefaultThemeLayout } from '@components/shared'
import Head from 'next/head'
import { LoginForm } from '@components/SignIn'
import { useModal } from '@hooks'

function SignIn() {
  const { showModal, hideModal } = useModal(() => <LoginForm onFinish={hideModal} />)

  return (
    <>
      <Head>
        <title>ChalkLine | Sign In</title>
      </Head>

      <DefaultThemeLayout>
        <div
          style={{ padding: '20px 0', display: 'flex', justifyContent: 'center' }}
        >
          <button className='btn btn--primary btn--tiny' onClick={showModal}>
            Show
          </button>
        </div>
      </DefaultThemeLayout>
    </>
  )
}

export default SignIn
