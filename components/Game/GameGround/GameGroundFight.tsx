import React from 'react'
import { Button } from '@components/UI'

const GameGroundFight = () => (
  <div className='game-ground__fight fight'>
    <div className='fight__top'>
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

    <div className='fight__btns'>
      <Button styleType='ghost'>Favorites</Button>
      <Button styleType='ghost'>Popular</Button>
      <Button styleType='ghost'>Random</Button>
    </div>
  </div>
)

export default GameGroundFight
