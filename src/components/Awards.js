import React from 'react'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { styles } from '../styles'
import AwardCard from './AwardCard'

const Awards = ({isMobile}) => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={isMobile ?'px-[12px] py-[0px] bg-tertiary rounded-2xl min-h-[300px]' : `${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Accomplishments</h2>
        </motion.div>
      </div>
      {/* -mt basically moves the cards on top of the testimonial div */}
      <div className={isMobile ? '-mt-[30px] pb-14 flex flex-wrap gap-7 pt-[0px]':`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index)=>(
          <div>
            <AwardCard isMobile={isMobile}
            key={testimonial.name}
            index={index}
            {...testimonial}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Awards,"awards")