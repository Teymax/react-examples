import React from 'react'
import Head from 'next/head'
import { LeaderboardSection } from '@components/Leaderboard'
import { PageContentWrapper } from '@components/shared'

function LeaderboardPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Leaderboard</title>
      </Head>

      <PageContentWrapper>
        <LeaderboardSection />
      </PageContentWrapper>
    </>
  )
}

export default LeaderboardPage
