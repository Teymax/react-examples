import React from 'react'
import Link from 'next/link'
import AccountSvg from '../../public/img/account.svg'
import PicksSvg from '../../public/img/picks.svg'
import SignOutSvg from '../../public/img/sign_out.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Icon from '@material-ui/core/Icon'
import classNames from 'classnames'
import { useToggler } from '@hooks'
import { useRouter } from 'next/router'

const navLinks = [
  {
    name: 'My picks',
    to: '/my-account/picks',
    icon: <PicksSvg />,
  },
  {
    name: 'Splash',
    to: '/splash',
    icon: <PicksSvg />,
  },
  {
    name: 'My Account',
    to: '/my-account',
    icon: <AccountSvg />,
  },
  // {
  //   name: 'Sign out',
  //   to: '/',
  //   icon: <SignOutSvg />,
  // },
  {
    name: 'Sign in',
    to: '/sign-in',
    icon: <SignOutSvg />,
  },
  {
    name: 'Sign up',
    to: '/sign-up',
    icon: <SignOutSvg />,
  },
]

function AppBar() {
  const matches = useMediaQuery('(min-width:835px)')
  const { toggle, isVisible } = useToggler()
  const router = useRouter()

  return (
    <div className={classNames('app-bar')}>
      <div className='app-bar__wrapper'>
        <div className='app-bar__logo'>
          <Link href='/'>
            <a>
              <img src='/img/app-bar_logo.svg' alt='Logo' />
            </a>
          </Link>
        </div>
        <div className='app-bar__links'>
          {matches ? (
            navLinks.map((link) => (
              <Link key={link.to} href={link.to}>
                <a
                  className={classNames('app-bar__link', {
                    active: router.pathname === link.to,
                  })}
                >
                  <div className='app-bar__link-icon'>{link.icon}</div>
                  {link.name}
                </a>
              </Link>
            ))
          ) : (
            <>
              <div className='app-bar__signup app-bar__action'>
                <Link href='/sign-up'>
                  <a>
                    <div className='app-bar__signup-icon'>
                      <Icon fontSize='large' style={{ color: '#0D2950' }}>
                        account_circle
                      </Icon>
                    </div>

                    <div className='app-bar__signup-text'>Signup</div>
                  </a>
                </Link>
              </div>

              <div className='app-bar__action'>
                <button className='btn' onClick={toggle}>
                  <Icon fontSize='large' style={{ color: '#0D2950' }}>
                    {isVisible ? 'close' : 'menu'}
                  </Icon>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {isVisible && !matches && (
        <div className='dropdown app-bar__dropdown'>
          <div className='dropdown__list'>
            {navLinks.map((link) => (
              <Link key={link.to} href={link.to}>
                <a className='dropdown__item'>
                  <div className='dropdown__item-icon'>{link.icon}</div>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AppBar
