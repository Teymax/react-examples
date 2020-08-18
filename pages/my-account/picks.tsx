import React from 'react';
import Head from 'next/head';
import { SectionMyPicks, AccountPageLayout } from '@components/MyAccount';
import { DefaultThemeLayout } from '@components/shared';

function MyPicks() {
  return (
    <>
      <Head>
        <title>ChalkLine | My Account | My Picks</title>
      </Head>

      <DefaultThemeLayout>
        <AccountPageLayout>
          <SectionMyPicks />
        </AccountPageLayout>
      </DefaultThemeLayout>
    </>
  );
}

export default MyPicks;
