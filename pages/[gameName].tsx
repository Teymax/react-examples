import React from 'react'
import { GamePageLayout, GameHeader } from '@components/Game'
import { Label, Divider } from '@components/shared'
import Head from 'next/head'
import { useRouter } from 'next/router'

const GameGround = () => (
  <div className='game-ground'>
    <div className='game-ground__fight fight'>
      <div className='fight__item fighter'>
        <div className='fighter__img'>
          <img src='/img/fighter_one.png' alt='left' />
        </div>
        <div className='fighter__info'>
          <div className='fighter__name'>Tony Ferguson</div>
          <div className='fighter__score'>+281</div>
        </div>
      </div>
      <div className='fight__vs'>
        <div className='fight__vs-text'>VS</div>
        <div className='fight__time'>7:15 pm</div>
      </div>
      <div className='fight__item fighter'>
        <div className='fighter__img'>
          <img src='/img/fighter_two.png' alt='right' />
        </div>
        <div className='fighter__info'>
          <div className='fighter__name'>Tony Ferguson</div>
          <div className='fighter__score'>-142</div>
        </div>
      </div>
    </div>
  </div>
)

function GamePage() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>ChalkLine | {router.query.gameName}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GamePageLayout>
        <GameHeader />
        <Divider />
        <GameGround />
      </GamePageLayout>
    </>
  )
}

export default GamePage
