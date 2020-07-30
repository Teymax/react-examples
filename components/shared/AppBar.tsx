import React from 'react'
import Link from 'next/link'
import AppBarLogoSvg from '../../public/img/app-bar_logo.svg'

function AppBar() {
  return (
    <div className='app-bar'>
      <div className='app-bar__logo'>
        <AppBarLogoSvg />
      </div>
      <div className='app-bar__links'>
        <Link href='/'>
          <a className='app-bar__link'>Home</a>
        </Link>
        <Link href='/sign-up'>
          <a className='app-bar__link'>SignUp</a>
        </Link>
        <Link href='/sign-in'>
          <a className='app-bar__link'>SignIn</a>
        </Link>
      </div>
    </div>
  )
}

export default AppBar
