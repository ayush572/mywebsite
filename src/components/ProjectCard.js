import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { Tilt } from 'react-tilt'

const ProjectCard = ({index, name, description, tags, image, source_code_link, where}) => {
  return (
    <motion.dev variants={fadeIn("up", "spring", index*0.5, 0.75)}>
        <Tilt 
        options={{
        max:45,
        scale: 1,
        speed: 450
        }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
            <div className='relative w-full h-[230px]'>
                <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div onClick={()=>window.open(source_code_link, "_blank")}
                    className={where==='hackathon'?'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer':'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'}>
                        <img src={where==='hackathon'?'devfolio.png':'github.png'} alt={where==="hackathon"?"devfolio.png":"github"} className='w-1/2 h-1/2 object-contain rounded-[100%]' />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag, index)=>(
                    <p key={tag.key} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                ))}
            </div>
        </Tilt>
    </motion.dev>
  )
}

export default ProjectCard