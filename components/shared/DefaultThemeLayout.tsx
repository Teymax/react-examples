import React from 'react'
import AppBar from './AppBar'

function DefaultThemeLayout({ children }: { children: any }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  )
}

export default DefaultThemeLayout
