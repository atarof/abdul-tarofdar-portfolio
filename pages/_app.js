import '../styles/globals.css'
import Header from '../Components/Home/Header/Header'

function MyApp({ Component, pageProps }) {

  return (
  
      <><Header /><Component {...pageProps} /></>
  
  )
  
}

export default MyApp
