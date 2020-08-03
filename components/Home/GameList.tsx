import React from 'react'
import BaseBallSvg from '../../public/img/baseball.svg'
import ArrowDownSvg from '../../public/img/arrow_down.svg'
import Link from 'next/link'
import { Label } from '@components/shared'

const GameListItem = () => (
  <div className='game'>
    <div className='game__content'>
      <div className='game__ball-icon'>
        <BaseBallSvg />
      </div>

      <div className='game__info'>
        <h4 className='game__title title title_subtitle'>Global Soccer Challenge</h4>
        <div className='game__time title title_caption'>
          Ends: APR 15, 6:00PM CDT
        </div>

        <Label text='Prize: $50.00' className='game__price' />
      </div>
    </div>

    <div className='game__play'>
      <Link
        as={`/${'Global Soccer Challenge'.split(' ').join('-')}`}
        href={`/[gameName]`}
      >
        <a className='btn btn--tiny btn--secondary'>Play</a>
      </Link>
    </div>
  </div>
)

function GameList() {
  return (
    <div className='game-list section container'>
      <div className='game-list__dropdown dropdown'>
        <p className='dropdown__title title title_caption'>All Games</p>
        <div className='dropdown__arrow'>
          <ArrowDownSvg />
        </div>
      </div>

      <div className='game-list__games'>
        <GameListItem />
        <GameListItem />
      </div>
    </div>
  )
}

export default GameList
