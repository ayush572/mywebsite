import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      {/* inset-0 is for the text that we will be writing */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'>
            
          </div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Ayush</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero