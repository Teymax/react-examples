import React from 'react';
import { PageContentWrapper } from '@components/shared';

function AccountPageLayout({ children }: any) {
  return (
    <PageContentWrapper className='account-page container--section'>
      {/* <div className='account-page__header'>
        <div className='container'>
          <PageBack text='Back' />
        </div>
      </div> */}

      {children}
    </PageContentWrapper>
  );
}

export default AccountPageLayout;
