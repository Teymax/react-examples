import React from 'react'
import Head from 'next/head'
import { LeaderboardSection } from '@components/Leaderboard'
import { PageContentWrapper, DefaultThemeLayout } from '@components/shared'

function LeaderboardPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Leaderboard</title>
      </Head>

      <DefaultThemeLayout>
        <PageContentWrapper>
          <LeaderboardSection />
        </PageContentWrapper>
      </DefaultThemeLayout>
    </>
  )
}

export default LeaderboardPage
