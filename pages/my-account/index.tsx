import React from 'react';
import Head from 'next/head';
import { SectionAccountManagement, AccountPageLayout } from '@components/MyAccount';
import { DefaultThemeLayout } from '@components/shared';

function MyAccount() {
  return (
    <>
      <Head>
        <title>ChalkLine | My Account</title>
      </Head>

      <DefaultThemeLayout>
        <AccountPageLayout>
          <SectionAccountManagement />
        </AccountPageLayout>
      </DefaultThemeLayout>
    </>
  );
}

export default MyAccount;
