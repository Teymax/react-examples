import React from 'react'
import Link from 'next/link'

function AccountPageLayout({ children }: any) {
  return (
    <div className='account-page'>
      <div className='account-page__header'>
        <div className='container'>
          <div className='account-page__back'>
            <Link href='/'>
              <a>Back</a>
            </Link>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default AccountPageLayout
