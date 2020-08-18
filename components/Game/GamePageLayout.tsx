import React from 'react';
import { PageBack, PageContentWrapper } from '@components/shared';

function GamePageLayout({ children }: any) {
  return (
    <PageContentWrapper className='game-page'>
      <div className='game-page__header page__header'>
        <div className='container'>
          <PageBack text='UFC Games' />
        </div>
      </div>

      <div className='container'>{children}</div>
    </PageContentWrapper>
  );
}

export default GamePageLayout;
