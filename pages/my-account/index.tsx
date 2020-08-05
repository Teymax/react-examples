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
      </Head>

      <AccountPageLayout>
        <SectionAccountManagement />

        <SectionGameHistory />
      </AccountPageLayout>
    </>
  )
}

export default MyAccount
