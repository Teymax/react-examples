import React from 'react'
import Head from 'next/head'
import { SectionAccountManagement, AccountPageLayout } from '@components/MyAccount'

function MyAccount() {
  return (
    <>
      <Head>
        <title>ChalkLine | My Account</title>
      </Head>

      <AccountPageLayout>
        <SectionAccountManagement />
      </AccountPageLayout>
    </>
  )
}

export default MyAccount
