import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, fadels, textVariant} from '../utils/motion'
import ServiceCard from './ServiceCard'
import {SectionWrapper} from '../hoc'

const About = ({isMobile}) => {
  return (
    <section className='p-[10px]'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-7xl leading-30px text-justify'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Tellus in hac habitasse platea dictumst vestibulum. 
      Tristique senectus et netus et malesuada. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sollicitudin nibh sit amet commodo nulla. 
      Commodo elit at imperdiet dui. Feugiat vivamus at augue eget arcu dictum varius duis at. Rhoncus mattis rhoncus urna neque viverra justo. 
      Massa tempor nec feugiat nisl pretium fusce id velit ut. Bibendum neque egestas congue quisque egestas diam in arcu cursus. 
      Ut tristique et egestas quis ipsum. Nisl nisi scelerisque eu ultrices vitae. Convallis posuere morbi leo urna molestie at elementum. 
      Massa tincidunt nunc pulvinar sapien. Nulla facilisi nullam vehicula ipsum. Sed pulvinar proin gravida hendrerit lectus. 
      Mi eget mauris pharetra et ultrices neque ornare aenean euismod.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} title={service.title}/>
        ))}
      </div>
      </section>
  )
}


//this is how we use higher order components inside reactjs
export default SectionWrapper(About, "about")