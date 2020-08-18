import React from 'react';
import AppBar from './AppBar';
import '@styles/index.scss';

function DefaultThemeLayout({ children }: { children: any }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}

export default DefaultThemeLayout;
