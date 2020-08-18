import React from 'react';
import { Label } from '@components/shared';
import { IGame } from '@store/types/game.types';

const GameHeader = ({ game }: { game?: IGame }) => (
  <header className='game-page__header header'>
    <div className='header__top'>
      <div className='header__info'>
        <h2 className='header__title title title_display'>{game?.name || ''}</h2>

        <div className='header__time'>12 Days : 13 Hrs : 32 Mins : 21 Secs</div>
        <Label text='Prize $50.00' className='header__label' />
      </div>

      <div className='header__get-more'>i</div>
    </div>

    <div className='header__footer'>0 of 4 picks</div>
  </header>
);

export default GameHeader;
