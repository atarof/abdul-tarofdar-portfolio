import Head from 'next/head'
import Header from '../Components/Home/Header/Header'
import About from '../Components/Home/About/About'
import Skills from '../Components/Home/Skills/Skills.js'
import ParticleBackground from '../Components/Home/Background/ParticleBackground'
import { motion } from 'framer-motion'
export default function Home() {
  
  return ( 
    <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
    }}>
      <Head>
       <title>Abdul Tarofdar - QA</title>
      </Head>
      <About>
      <ParticleBackground/>
      </About>
        <Skills/>
    
  </motion.div>
  )
}
