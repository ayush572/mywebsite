import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { staggerContainer } from '../utils/motion'



// component -> it's the actual component
// idName-> its the id of the section
const SectionWrapper = (Component, idName) => {
  function HOC(){
    return (
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView={"show"}
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className='hash-span' id={idName}>
            {/* this is just an empty space */}
                &nbsp; 
            </span>
            <Component />
        </motion.section>
    )
  }
  return HOC;
}

export default SectionWrapper