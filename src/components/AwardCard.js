import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion'

const AwardCard = ({isMobile, index, testimonial, name, designation, company, image}) => {
  return (
    <motion.div variants={fadeIn("","spring",index*0.5,0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
        {/* <p className='text-white font-black text-[48px]'>"</p> */}
        <div className='mt-1 '>
        <div className='flex flex-1 flex-col-reverse justify-between items-left gap-1'>
            <div className='flex-1 flex flex-col'>
                <p className='text-white font-medium text-[16px]'>
                    <span
                    className='blue-text-gradient'>@</span>{name}
                </p>
                <p className='mt-1 text-secondary text-[14px]'>
                    {designation} of {company}
                </p>
            </div>
            <img src={image} alt={name} className='w-full h-[20] object-cover'/>
        </div>
        <p className='text-white tracking-wider text-[12px] mt-7'>{testimonial}</p>
        
        </div>
        
    </motion.div>
  )
}

export default AwardCard