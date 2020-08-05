import React from 'react'
import { TableData } from '@components/UI'

const tableInfo = {
  body: [
    {
      name: 'Theresa Webb',
      points: '9,975,040',
    },
    {
      name: 'Theresa Webb',
      points: '9,975,040',
    },
    {
      name: 'Theresa Webb',
      points: '9,975,040',
    },
    {
      name: 'Theresa Webb',
      points: '9,975,040',
    },
    {
      name: 'Theresa Webb',
      points: '9,975,040',
    },
    {
      name: 'Theresa Webb',
      points: '9,975,040',
    },
  ],
}

function LeaderboardSection() {
  return (
    <div className='section leaderboard'>
      <div className='container'>
        <h1 className='section__head leaderboard__title title'>Leaderboard</h1>

        <div className='leaderboard__header'>
          <div className='leaderboard__card-line'>
            <div className='leaderboard__card active'>NHL - Pick 5</div>
            <div className='leaderboard__card'>PC - 3 Ball Pick</div>
            <div className='leaderboard__card'>6N - Rugby</div>
            <div className='leaderboard__card'>6N - Rugby</div>
            <div className='leaderboard__card'>6N - Rugby</div>
            <div className='leaderboard__card'>6N - Rugby</div>
          </div>
        </div>

        <div className='leaderboard__body'>
          <div className='leaderboard__date'>March</div>

          <TableData
            className='leaderboard__table'
            tableInfo={tableInfo}
            renderRow={(item: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.points}</td>
              </tr>
            )}
          >
            <tr className='table__row--highlighted'>
              <td>223</td>
              <td>You</td>
              <td>9,697,738</td>
            </tr>
          </TableData>

          <div className='leaderboard__dots'>
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardSection
