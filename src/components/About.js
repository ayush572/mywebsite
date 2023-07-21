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
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-7xl leading-30px text-justify'>
      Hi! I'm Ayush Daga, hailing from Ahmedabad, Gujarat. I realized my passion about the programming since grade 11th, 
      when I was introduced with C++ programming language and solving DSA using that. Continuing my journey in school, I had to make a
      project in grade 12th, related to any real world system that we would like to implement using plain C++ language.
      So, I proceeded ahead and developed an <b>"Airline Reservation System"</b> using C++ as the final project for the school course
      and I realized that I really enjoyed coding that out. I was really impressed with the project, how complex 
      and deeper can I make the system, how the real world airline system would be working, and that became 
      one of the <b>turning and triggering point</b> in my coding journey. Soon I started feeling that now,
      even for a single day if I miss to code, I would really feel agitated as if some important 
      part of my life has been separated from me. Ever since then, my passion for programming have been seen no stopping. 
      
      Then, after I passed out from my school, <b>"Delhi Public School Gandhinagar"</b>, securing a percentage of <b>"94.8%" in PCM + Computer Science</b> I 
      and after giving the JEE Exam, I entered into one of the prestigious NIT's of the country, <b>"SVNIT Surat"</b>. 
      In the college, I have been proactively involved about learning new technologies, participating in 
      hackathaons as well as developing projects and gaining experiences through various internships as well. 
      Wanna know more about me and what have I done so far.....? Go ahead and explore!!
      
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