import React from 'react'
import { PageBack } from '@components/shared'

function GamePageLayout({ children }: any) {
  return (
    <>
      <div className='page__inner game-page'>
        <div className='game-page__header page__header'>
          <div className='container'>
            <PageBack text='UFC Games' />
          </div>
        </div>

        <div className='container'>{children}</div>
      </div>
    </>
  )
}

export default GamePageLayout
