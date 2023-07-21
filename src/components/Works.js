import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
    <div className='w-full flex'>
      <motion.p
      variants={fadeIn("","",0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-7xl leading-[30px] text-justify'>
        Throught my journey, I have been able to build several projects in various domains. These projects have been build as my personal
        project, when I was learning something new, or as a hackathon project or with my friend or some other. Through these, I was able to develop a lot of Skills
        meet new people and even got various opportunites to show my skills into what I learn't and whether I'm able to implement those stuff.
        </motion.p></div>  
        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index)=>(
            <ProjectCard key={`project-${index}`}
            index={index}
            {...project}/>
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(Works, "work")