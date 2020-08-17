import React from 'react'
import Head from 'next/head'
import { PageContentWrapper, DefaultThemeLayout } from '@components/shared'
import { Button } from '@components/UI'
import Link from 'next/link'

const ConfirmSection = () => (
  <section className='confirm-section'>
    <div className='container'>
      <div className='confirm-section__header'>
        <h1 className='title section__head title_display'>Thank you for playing!</h1>
        <div className='confirm-section__info'>
          Your entry for{' '}
          <a className='link link--highlight'>Weekend Horse Racing Trifecta</a> has
          been received.
        </div>
      </div>

      <div className='confirm-section__body'>
        <div className='info'>
          <div className='info__grid'>
            <div className='info__item item'>
              <div className='item__title'>Time Received</div>
              <div className='item__value'>Fri. 4/17 @ 3:52 AM</div>
            </div>
            <div className='info__item item'>
              <div className='item__title'>Bet ID</div>
              <div className='item__value'>ACT-31231321312</div>
            </div>

            <div className='info__item item'>
              <div className='item__title'>Game Start Time</div>
              <div className='item__value'>Sat. 4/19 @ 2:30 PM</div>
            </div>
            <div className='info__item item'>
              <div className='item__title'>Picks Made</div>
              <div className='item__value'>3</div>
            </div>
            <div className='info__item item'>
              <div className='item__title'>A $1 bet would pay...</div>
              <div className='item__value'>$23,949.00</div>
            </div>
          </div>
        </div>

        <div className='confirm-section__helper'>
          We'll let you know how you scored when the game is over.
        </div>

        <Link href='my-account/picks'>
          <a>
            <Button className='confirm-section__btn' styleType='secondary'>
              View your picks
            </Button>
          </a>
        </Link>
      </div>

      <div className='confirm-section__footer'>
        <div className='confirm-section__share'>
          <h4 className='confirm-section__share-title title title_headline'>
            Share your picks
          </h4>

          <div className='confirm-section__share-grid'>
            <div className='confirm-section__share-item share-facebook'>
              Facebook
            </div>
            <div className='confirm-section__share-item share-twitter'>Twitter</div>
            <div className='confirm-section__share-item share-email'>Email</div>
            <div className='confirm-section__share-item share-copy'>Copy Link</div>
          </div>
        </div>

        <Button
          styleType='primary'
          className='confirm-section__btn confirm-section__btn-more-action'
        >
          Get more action!
        </Button>
      </div>
    </div>
  </section>
)

function ConfirmationPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Confirmation</title>
      </Head>

      <DefaultThemeLayout>
        <PageContentWrapper>
          <ConfirmSection />
        </PageContentWrapper>
      </DefaultThemeLayout>
    </>
  )
}

export default ConfirmationPage
