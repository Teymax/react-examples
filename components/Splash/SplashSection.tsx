import React from 'react'
import { Button } from '@components/UI'
import BaseballSvg from '../../public/img/baseball.svg'

function SplashSection() {
  return (
    <div className='section splash'>
      <div className='container'>
        <div className='splash__poster'>
          <div className='splash__content'>
            <div className='splash__body'>
              <div className='splash__icon'>
                <BaseballSvg />
              </div>
              <div className='splash__title title title_big-display'>
                Players Championship 3 ball pick
              </div>

              <div className='splash__subtitle title title_subtitle'>Play & Win</div>

              <div className='splash__prize-box'>$50</div>

              <div className='splash__subtitle splash__secondary-title title title_subtitle'>
                Secondary title
              </div>
            </div>

            <div className='splash__footer'>
              <div className='splash__start'>
                <div className='splash__start-title'>Starts in</div>
                <div className='splash__start-time'>13 HRS : 32 MINS : 21 Secs</div>
              </div>
              <Button className='splash__btn' styleType='primary'>
                Play Now
              </Button>
            </div>
          </div>
          <div className='splash__bg' />
        </div>
      </div>
    </div>
  )
}

export default SplashSection
