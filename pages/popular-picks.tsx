import React from 'react'
import Head from 'next/head'
import { PageContentWrapper, Divider } from '@components/shared'
import { Button } from '@components/UI'

const PicksTableCard = () => (
  <div className='picks-card'>
    <div className='picks-card__header'>Thurs, 6:03 PM CDT</div>
    <div className='picks-card__body'>
      <div className='card-player active'>
        <div className='card-player__name'>Jenny Wilson</div>
        <div className='card-player__stat'>70%</div>
      </div>
      <div className='card-player'>
        <div className='card-player__name'>Jenny Wilson</div>
        <div className='card-player__stat'>70%</div>
      </div>
      <div className='card-player'>
        <div className='card-player__name'>Jenny Wilson</div>
        <div className='card-player__stat'>70%</div>
      </div>
    </div>
  </div>
)

const PopularPicksTable = () => (
  <div className='popular-picks__table picks-table'>
    <div className='picks-table__header'>
      <div className='picks-table__title'>Who will win each 3-ball pairing?</div>
    </div>

    <div className='picks-table__body'>
      <PicksTableCard />
      <PicksTableCard />
      <PicksTableCard />
    </div>
  </div>
)

function PopularPicksSection() {
  return (
    <div className='section popular-picks'>
      <div className='popular-picks__header'>
        <div className='container--section'>
          <h1 className='section__head popular-picks__title title'>Popular Picks</h1>
          <div className='popular-picks__info'>
            Get the consensus across all action 247 players on what they think the
            winners will be!
          </div>
        </div>
      </div>

      <div className='popular-picks__content'>
        <div className='popular-picks__body'>
          <PopularPicksTable />
        </div>

        <div className='popular-picks__footer picks-footer'>
          <div className='picks-footer__title'>A $10 Bet wind $435.40!</div>
          <div className='picks-footer__subtitle'>Make it a parlay +4025</div>
          <Button styleType='primary' className='picks-footer__btn'>
            Place Bet!
          </Button>
        </div>
      </div>
    </div>
  )
}

function PopularPicksPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Popular Picks</title>
      </Head>

      <PageContentWrapper>
        <PopularPicksSection />
      </PageContentWrapper>
    </>
  )
}

export default PopularPicksPage
