import React from 'react'
import Head from 'next/head'
import { SplashSection } from '@components/Splash'
import { PageContentWrapper, DefaultThemeLayout } from '@components/shared'

function SplashPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Splash</title>
      </Head>

      <DefaultThemeLayout>
        <PageContentWrapper>
          <SplashSection />
        </PageContentWrapper>
      </DefaultThemeLayout>
    </>
  )
}

export default SplashPage
