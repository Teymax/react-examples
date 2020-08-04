import React from 'react'
import classNames from 'classnames'

const GameGroundBet = ({
  header,
  cards,
  cardClassName = '',
  additionalCardBlock = null,
}: {
  header: string
  cards: Array<{ title: string | number; subtitle?: string }>
  cardClassName?: string
  additionalCardBlock?: JSX.Element
}) => (
  <div className='bets__item bet'>
    <h3 className='bet__header'>{header}</h3>
    <div className='bet__inner'>
      {cards.map((card, index) => (
        <div className={classNames('bet__card card', cardClassName)} key={index}>
          <div className='card__title'>{card.title}</div>
          {card.subtitle && <div className='card__subtitle'>{card.subtitle}</div>}
        </div>
      ))}
    </div>
    {additionalCardBlock}
  </div>
)

const GameGroundBets = () => (
  <div className='game-ground__bets bets'>
    <GameGroundBet
      header={'Which fighter will win the bout?'}
      cards={[
        {
          title: 'Tony Ferguson',
          subtitle: '-142',
        },
        {
          title: 'Tony Ferguson',
          subtitle: '-142',
        },
      ]}
      cardClassName='bet__fighter'
    />

    <GameGroundBet
      header={'How many round will the bout last?'}
      cards={[
        {
          title: 'Over 2.5',
          subtitle: '-142',
        },
        {
          title: 'Under 2.5',
          subtitle: '+142',
        },
      ]}
    />

    <GameGroundBet
      header={'How many round will the bout last?'}
      cards={[
        {
          title: 1,
        },
        {
          title: 2,
        },
        {
          title: 3,
        },
        {
          title: 4,
        },
        {
          title: 5,
        },
      ]}
      additionalCardBlock={
        <div className='card card__add-info'>
          <div className='card__title'>Distance</div>
        </div>
      }
    />

    <GameGroundBet
      header={'Method of victory'}
      cards={[
        {
          title: 'KO',
        },
        {
          title: 'TKO',
        },
        {
          title: 'Decision',
        },
      ]}
    />
  </div>
)

export default GameGroundBets
