import React from 'react';
import Head from 'next/head';
import { PromoCardsCarousel, GameList } from '@components/Home';
import { PageContentWrapper, DefaultThemeLayout } from '@components/shared';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>ChalkLine</title>
      </Head>

      <DefaultThemeLayout>
        <PageContentWrapper>
          <PromoCardsCarousel />

          <GameList />
        </PageContentWrapper>
      </DefaultThemeLayout>
    </>
  );
}
