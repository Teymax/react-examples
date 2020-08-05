import React from 'react'
import Head from 'next/head'
import { SplashSection } from '@components/Splash'

function SplashPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Splash</title>
      </Head>

      <SplashSection />
    </>
  )
}

export default SplashPage
