import React from 'react'
import BaseBallSvg from '../../public/img/baseball.svg'
import ArrowDownSvg from '../../public/img/arrow_down.svg'
import Link from 'next/link'
import { Label } from '@components/shared'
import { useSelector, useDispatch } from 'react-redux'
import { IGame } from '@store/types/game.types'
import { RootState } from '@store/reducers'
import { gameActions } from '@store/actions'

const GameListItem = ({ game }: { game: IGame }) => (
  <div className='game'>
    <div className='game__content'>
      <div className='game__ball-icon'>
        <BaseBallSvg />
      </div>

      <div className='game__info'>
        <h4 className='game__title title title_subtitle'>{game.name}</h4>
        <div className='game__time title title_caption'>
          Ends: APR 15, 6:00PM CDT
        </div>

        <Label text='Prize: $50.00' className='game__price' />
      </div>
    </div>

    <div className='game__play'>
      <Link as={`/${game.id}`} href={`/[id]`}>
        <a className='btn btn--tiny btn--secondary'>Play</a>
      </Link>
    </div>
  </div>
)

const GameListItems = () => {
  const { games } = useSelector((state: RootState) => ({ games: state.game.games }))
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(gameActions.fetchMultipleGamesRequest())
  }, [])

  return (
    <section className='game-list__games section--highlight'>
      {!games.length ? (
        <div>No games</div>
      ) : (
        games.map((game) => <GameListItem key={game.id} game={game} />)
      )}
    </section>
  )
}

function GameList() {
  return (
    <div className='game-list section container'>
      <div className='game-list__dropdown dropdown'>
        <p className='dropdown__title title title_caption'>All Games</p>
        <div className='dropdown__arrow'>
          <ArrowDownSvg />
        </div>
      </div>
      <GameListItems />
    </div>
  )
}

export default GameList
