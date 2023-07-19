import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = ({ isMobile }) => {

  return (
    <section id="hero" className="relative w-full h-screen mx-auto mt-[-50px] mb-[0px]">
      {/* inset-0 is for the text that we will be writing */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Ayush</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>

      <ComputersCanvas isMobile={isMobile}/>
      <div className='absolute bottom-20 flex w-full justify-center'>
        <a href='#about'>
          <div className='w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-end p-2'>
            {/* now we are using framer motion here */}
            <motion.div
              animate={{
                y:[0, -24, 0], //means will rotate it up and down
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
