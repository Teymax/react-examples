import React from 'react'
import Head from 'next/head'
import { PromoCardsCarousel, GameList } from '@components/Home'
import { PageContentWrapper } from '@components/shared'

export default function Home() {
  return (
    <>
      <Head>
        <title>ChalkLine</title>
      </Head>

      <PageContentWrapper>
        <PromoCardsCarousel />

        <GameList />
      </PageContentWrapper>
    </>
  )
}
