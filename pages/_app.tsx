import '@styles/globals.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ModalProvider } from '../context/Modal'
import { AppBar } from '@components/shared'

function MyApp({ Component, pageProps }) {
  return (
    <div className='page'>
      <ModalProvider>
        <AppBar />

        <Component {...pageProps} />
      </ModalProvider>
    </div>
  )
}

export default MyApp
