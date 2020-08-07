import React from 'react'
import Head from 'next/head'
import { SplashSection } from '@components/Splash'
import { PageContentWrapper } from '@components/shared'

function SplashPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Splash</title>
      </Head>

      <PageContentWrapper>
        <SplashSection />
      </PageContentWrapper>
    </>
  )
}

export default SplashPage
