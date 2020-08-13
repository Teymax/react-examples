import '@styles/globals.scss'
import { ModalProvider } from '@context/Modal'
import { AppBar } from '@components/shared'
import Head from 'next/head'
import { wrapper } from '@store'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useStore } from 'react-redux'
import redirectTo from 'utils/helpers/redirectTo'
import cookies from 'next-cookies'
import { PersistGate } from 'redux-persist/integration/react'
import JwtDecode from 'jwt-decode'
import { AppProps } from 'next/app'

const protectedRoutes = ['/dashboard', '/documents', '/pdfs', '/sketches']

const protectedAdminRoutes = ['/dashboard/admin']

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore()
  // @ts-ignore
  const persistor = store.__persistor

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='page'>
        <ModalProvider>
          <AppBar />

          {/* <PersistGate persistor={persistor} loading={<div>Loading...</div>}> */}
          <Component {...pageProps} />
          {/* </PersistGate > */}
        </ModalProvider>
      </div>
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const { ctx } = appContext
  const { accessToken } = cookies(ctx)

  const { pathname } = ctx

  const isProtected = protectedRoutes.find((route) => pathname.startsWith(route))

  try {
    if (isProtected) {
      const { role } = JwtDecode(accessToken || '')

      if (
        role !== 'admin' &&
        protectedAdminRoutes.find((route) => pathname.startsWith(route))
      ) {
        throw Error
      }
    }
  } catch (error) {
    redirectTo('/', ctx)
  }

  const { Component } = appContext
  if (Component.getInitialProps) {
    return {
      pageProps: await Component.getInitialProps,
    }
  }

  return {}
}

export default wrapper.withRedux(MyApp)
