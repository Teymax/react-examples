import React from 'react';
import BaseBallSvg from '../../public/img/baseball.svg';
import BoxingSvg from '../../public/img/boxing.svg';
import SoccerSvg from '../../public/img/soccer.svg';
import ArrowDownSvg from '../../public/img/arrow_down.svg';
import Link from 'next/link';
import { Label } from '@components/shared';
import { useSelector, useDispatch } from 'react-redux';
import { IGame } from '@store/types/game.types';
import { RootState } from '@store/reducers';
import { gameActions } from '@store/actions';
import format from 'date-fns/format';

const getGameIcon = ({ sport }: IGame) => {
  switch (sport) {
    case 'Baseball':
      return <BaseBallSvg />;

    case 'Soccer':
      return <SoccerSvg />;

    case 'Boxing':
      return <BoxingSvg />;

    default:
      break;
  }
};

const GameListItem = ({ game }: { game: IGame }) => (
  <div className='game'>
    <div className='game__content'>
      <div className='game__ball-icon'>{getGameIcon(game)}</div>

      <div className='game__info'>
        <h4 className='game__title title title_subtitle'>{game.name}</h4>
        <div className='game__time title title_caption'>
          {/* APR 15, 6:00PM CDT */}
          Ends:{' '}
          {game.startDate ? (
            format(new Date(game.startDate), 'MMM dd h:mm a O')
          ) : (
            <span style={{ color: 'red' }}>!No info!</span>
          )}
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
);

const GameListItems = () => {
  const { games } = useSelector((state: RootState) => ({ games: state.game.games }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(gameActions.fetchMultipleGamesRequest());
  }, []);

  return (
    <section className='game-list__games section--highlight'>
      {!games.length ? (
        <div>Loading...</div>
      ) : (
        games.map((game) => <GameListItem key={game.id} game={game} />)
      )}
    </section>
  );
};

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
  );
}

export default GameList;
