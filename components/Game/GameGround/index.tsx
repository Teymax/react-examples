import React from 'react'
import GameGroundFight from './GameGroundFight'
import classNames from 'classnames'
import GameGroundBets from './GameGroundBets'
import { Button } from '@components/UI'

const GameGroundFooter = () => (
  <div className='game-ground__footer footer'>
    <div className='footer__submit'>
      <Button className='footer__btn' styleType='primary'>
        Enter to win
      </Button>
    </div>
    <div className='footer__terms terms'>
      by clicking Enter to win you agree to our
      <span className='terms__text--highlight'>Terms & Conditions.</span>
    </div>
  </div>
)

const GameGround = () => (
  <div className='game-ground'>
    <GameGroundFight />

    <GameGroundBets />

    <GameGroundFooter />
  </div>
)

export default GameGround
