import React from 'react'
import Head from 'next/head'
import { LeaderboardSection } from '@components/Leaderboard'

function LeaderboardPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Leaderboard</title>
      </Head>

      <div className='page__body'>
        <LeaderboardSection />
      </div>
    </>
  )
}

export default LeaderboardPage
