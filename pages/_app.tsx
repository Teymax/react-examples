import '@styles/globals.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ModalProvider from 'context/ModalProvider'
import { AppBar } from '@components/shared'

function MyApp({ Component, pageProps }) {
  return (
    <div className='page'>
      <AppBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
