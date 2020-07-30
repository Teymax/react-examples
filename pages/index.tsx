import React from 'react'
import Head from 'next/head'
import { PromoCardsCarousel, GameList } from '@components/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>ChalkLine</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PromoCardsCarousel />

      <GameList />
    </>
  )
}
