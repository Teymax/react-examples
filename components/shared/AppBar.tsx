import React from 'react'
import Link from 'next/link'
import AppBarLogoSvg from '../../public/img/app-bar_logo.svg'
import AccountSvg from '../../public/img/account.svg'
import PicksSvg from '../../public/img/picks.svg'
import SignOutSvg from '../../public/img/sign_out.svg'

const navLinks = [
  {
    name: 'My picks',
    to: '/my-account/picks',
    icon: <PicksSvg />,
  },
  {
    name: 'My Account',
    to: '/my-account',
    icon: <AccountSvg />,
  },
  {
    name: 'Sign out',
    to: '/',
    icon: <SignOutSvg />,
  },
]

function AppBar() {
  return (
    <div className='app-bar'>
      <div className='app-bar__logo'>
        <Link href='/'>
          <a>
            <AppBarLogoSvg />
          </a>
        </Link>
      </div>
      <div className='app-bar__links'>
        {navLinks.map(link => (
          <Link key={link.to} href={link.to}>
            <a className='app-bar__link'>
              <div className='app-bar__link-icon'>{link.icon}</div>
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AppBar
