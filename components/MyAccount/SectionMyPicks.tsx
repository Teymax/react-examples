import React from 'react'
import { TableData } from '@components/UI'

const tableInfo = {
  headers: ['Date', 'Game', ''],
  body: [
    {
      date: '14 Apr 2020',
      game: 'Global Soccer Challenge',
    },
  ],
}

const SectionMyPicks = () => (
  <section className='section picks'>
    <div className='container'>
      <h1 className='section__head title title_headline'>My picks</h1>

      <TableData
        className='picks__table'
        tableInfo={tableInfo}
        renderRow={(item: any, index: any) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.game}</td>
            <td>
              <button className='btn btn--primary picks__btn'>
                View picks
              </button>
            </td>
          </tr>
        )}
      />
    </div>
  </section>
)

export default SectionMyPicks
