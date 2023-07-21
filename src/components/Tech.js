import React from 'react'
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import {technologies} from '../constants'
// Import the LazyLoad component from react-lazyload
import LazyLoad from 'react-lazyload';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div className='w-18 h-18' key={technology.name}>
          {/* Wrap the BallCanvas component with LazyLoad */}
          <LazyLoad height={100} offset={100}>
            <BallCanvas icon={technology.icon} />
          </LazyLoad>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")