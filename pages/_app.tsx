import '@styles/globals.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ModalProvider } from '../context/Modal'
import { AppBar } from '@components/shared'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
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
      </Head>
      <div className='page'>
        <ModalProvider>
          <AppBar />

          <Component {...pageProps} />
        </ModalProvider>
      </div>
    </>
  )
}

export default MyApp
