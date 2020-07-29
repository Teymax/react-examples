import '@styles/globals.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='page'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
