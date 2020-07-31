import React from 'react'
import { TableData } from '@components/UI'
const tableInfo = {
  headers: ['Date', 'Game'],
  body: [
    {
      date: '14 Apr 2020',
      game: 'adadawdawda',
    },
  ],
}

const SectionGameHistory = () => (
  <div className='section game-history'>
    <div className='container'>
      <div className='game-history__info info'>
        <h3 className='info__title'>Recent game history</h3>
        <TableData
          tableInfo={tableInfo}
          renderRow={(item: any, index: any) => (
            <tr key={index + item.game}>
              <td>{item.date}</td>
              <td>{item.game}</td>
              <td>
                <button className='btn btn--link'>View picks</button>
              </td>
            </tr>
          )}
        />

        <div className='info__action'>
          <button className='btn btn--secondary info__btn'>
            See all game history
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default SectionGameHistory
