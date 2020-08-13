import React from 'react'

function FollowSection() {
  return (
    <div className='follow-us container section'>
      <div className='follow-us__header'>
        <div className='follow-us__title'>Follow us</div>
        <div className='follow-us__list'>
          <div className='follow-us__item'>Twitter</div>
          <div className='follow-us__item'>Facebook</div>
          <div className='follow-us__item'>Instagram</div>
        </div>
      </div>

      <div className='follow-us__address'>
        <a className='link link--underline'>action247.com</a> - Nashville, TN
      </div>

      <div className='follow-us__unsubscribe'>
        Click here to <a className='link link--underline'>unsubscribe</a>
      </div>
    </div>
  )
}

export default FollowSection
