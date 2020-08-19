import React from 'react';
import Head from 'next/head';
import { PageContentWrapper } from '@components/shared';
import { Button, FormInput } from '@components/UI';
import classNames from 'classnames';

const LandingHeader = () => (
  <header className='landing-page__header'>
    <div className='landing-page__container'>
      <div className='landing-page__info landing-page__header-item'>
        <div className='landing-page__logo' />
        <div className='landing-page__title'>All the action you'll ever need!!</div>
        <div className='landing-page__description'>
          Tennessee Action 24/7 launched with the simple idea of creating a
          world-class sportsbook for the people of Tennessee and having a ton of fun
          doing it. We’re not a mega-corporation from some far off land. We’re
          Tennessee owned and operated.
        </div>
      </div>

      <div className='landing-page__bg landing-page__header-item'>
        <div className='landing-page__phone' />
      </div>
    </div>
  </header>
);

const LandingFooter = () => (
  <div className='landing-page__footer'>
    <div className='landing-page__legal landing-page__footer-item'>
      <div className='landing-page__footer-info'>
        <div className='landing-page__footer-title'>Legal</div>
        <div className='landing-page__footer-subtitle'>Sports bettings</div>
        <div className='landing-page__footer-list'>
          <div className='landing-page__footer-list-item'>
            Sportsbetting Operator License Submitted
          </div>
          <div className='landing-page__footer-list-item'>
            Tennessee owned and operated.
          </div>
          <div className='landing-page__footer-list-item'>
            Soon to Go Live in our Great State
          </div>
        </div>

        <div className='landing-page__footer-helper'>
          Put your email below and we will let you know when that first bet can be
          made right here in Tennessee.
        </div>

        <div className={classNames('field landing-page__email_field')}>
          <div className='field__wrap'>
            <input className='field__input' placeholder='E-mail*' />
          </div>
        </div>

        <div className='landing-page__footer-action'>
          <Button styleType='primary'>Keep me updated</Button>
        </div>
      </div>
      <div className='landing-page__legal-bg' />
      <div className='landing-page__legal-overlay' />
    </div>

    <div className='landing-page__free_play landing-page__footer-item'>
      <div className='landing-page__footer-info'>
        <div className='landing-page__footer-title'>Free to play</div>
        <div className='landing-page__footer-subtitle'>Sports bettings</div>
        <div className='landing-page__footer-list'>
          <div className='landing-page__footer-list-item'>
            Yes, that’s right. Free to Play
          </div>
          <div className='landing-page__footer-list-item'>
            Play and Win Real Money or Action 24/7 SWAG
          </div>
          <div className='landing-page__footer-list-item'>
            More fun than Cooter Brown
          </div>
        </div>

        <div className='landing-page__footer-action'>
          <Button styleType='primary'>Let's Play!</Button>
        </div>

        <div className='landing-page__footer-helper'>
          Free to Play is available in 44 states.
        </div>
      </div>
      <div className='landing-page__free_play-bg' />
      <div className='landing-page__free_play-overlay' />
    </div>
  </div>
);

function LandingPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Landing</title>
      </Head>

      <PageContentWrapper className='landing-page'>
        <LandingHeader />

        <LandingFooter />
      </PageContentWrapper>
    </>
  );
}

export default LandingPage;
