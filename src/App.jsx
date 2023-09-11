import React, { useEffect, useState } from 'react'
import styles from './style'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Qualification from './components/Qualification';
import About from './components/About';
import Billings from './components/Billings';
import Footer from './components/Footer';
import { Type } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence, color } from 'framer-motion'
import ReactLoading from 'react-loading';

const App = () => {
  return (
   
    <div className='bg-neutral-800 w-full overflow-hidden'>
      <div className={`bg-neutral-800 ${styles.flexCenter}`}>
        {/* <div className={`${styles.boxWidth}`}> */}
          <Navbar />
        {/* </div> */}
      </div>

      <div className={`${styles.flexStart}`}>
        {/* <div className={`${styles.boxWidth} mt-32`}> */}
          <Hero />
        {/* </div> */}
      </div>
      <div className={`${styles.flexStart}`}>
        {/* <div className={`${styles.boxWidth} mt-32`}> */}
          <Stats />
        {/* </div> */}
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mt-32`}>
         <Business />
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        {/* <div className={`${styles.boxWidth} mt-32`}> */}
        <Qualification />
        {/* </div> */}
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Billings />
          <Footer />

          
        </div>
      </div>
    </div>
  )
}

export default App
