import React from 'react';
import { TableData } from '@components/UI';
import { useDispatch, useSelector } from 'react-redux';
import { betActions } from '@store/actions';
import { RootState } from '@store/reducers';

const tableInfo = {
  headers: ['Date', 'Game', ''],
  body: [
    {
      date: '14 Apr 2020',
      game: 'Global Soccer Challenge',
    },
  ],
};

const SectionMyPicks = () => {
  const dispatch = useDispatch();

  const { bets } = useSelector((state: RootState) => ({ bets: state.bet.bets }));

  React.useEffect(() => {
    dispatch(betActions.fetchBetsRequest());
  }, []);

  return (
    <section className='section picks'>
      <div className='container'>
        <h1 className='section__head title title_headline'>My picks</h1>

        <TableData
          className='picks__table'
          tableInfo={{
            headers: tableInfo.headers,
            body: bets,
          }}
          renderRow={(item: any, index: any) => (
            <tr key={index + item}>
              <td>{item.date}</td>
              <td>{item.game}</td>
              <td>
                <button className='btn btn--primary picks__btn'>View picks</button>
              </td>
            </tr>
          )}
        />
      </div>
    </section>
  );
};

export default SectionMyPicks;
