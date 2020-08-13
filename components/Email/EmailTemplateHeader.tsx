import React from 'react'

const EmailTemplateHeader = () => (
  <div className='email-template__header'>
    <div className='email-template__issues'>
      Having issues to read?{' '}
      <a className='link link--underline email-template__desktop-link'>
        See the desktop version
      </a>
    </div>

    <hr className='email-template__line' />
  </div>
)

export default EmailTemplateHeader
