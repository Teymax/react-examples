import React from 'react'
import Head from 'next/head'
import { SplashSection } from '@components/Splash'

function Splash() {
  return (
    <>
      <Head>
        <title>ChalkLine | Splash</title>
      </Head>

      <SplashSection />
    </>
  )
}

export default Splash
