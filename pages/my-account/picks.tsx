import React from 'react'
import Head from 'next/head'
import { SectionMyPicks, AccountPageLayout } from '@components/MyAccount'

function MyPicks() {
  return (
    <>
      <Head>
        <title>ChalkLine | My Account | My Picks</title>
      </Head>

      <AccountPageLayout>
        <SectionMyPicks />
      </AccountPageLayout>
    </>
  )
}

export default MyPicks
