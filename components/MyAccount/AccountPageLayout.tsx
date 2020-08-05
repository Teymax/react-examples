import React from 'react'
import { PageBack } from '@components/shared'

function AccountPageLayout({ children }: any) {
  return (
    <div className='account-page page__body'>
      <div className='account-page__header'>
        <div className='container'>
          <PageBack text='Back' />
        </div>
      </div>

      {children}
    </div>
  )
}

export default AccountPageLayout
