import React from 'react'
import Head from 'next/head'
import {
  SectionGameHistory,
  SectionAccountManagement,
  AccountPageLayout,
} from '@components/MyAccount'

function MyAccount() {
  return (
    <>
      <Head>
        <title>ChalkLine | My Account</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AccountPageLayout>
        <SectionAccountManagement />

        <SectionGameHistory />
      </AccountPageLayout>
    </>
  )
}

export default MyAccount
