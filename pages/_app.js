import '../styles/globals.css'
import {AnimatePresence} from 'framer-motion'
import Header from '../Components/Home/Header/Header'

function MyApp({ Component, pageProps }) {

  return (
    <AnimatePresence >
      <Header/>
    <Component {...pageProps}
      />
      </AnimatePresence>
  )
  
}

export default MyApp
