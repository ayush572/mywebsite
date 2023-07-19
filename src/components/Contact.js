import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser' //this will help the people to send us email
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = ({isMobile}) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* form is also going to be animated and will be sliding from left side */}
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
        ref={formRef}
        onSubmit={()=>handleSubmit}
        className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className='bg-teritary py-4 px-6 placeholder:text-secondary text-white rounded-lgoutlined-none norder-none font-medium'
            ></input>
            
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className='bg-teritary py-4 px-6 placeholder:text-secondary text-white rounded-lgoutlined-none norder-none font-medium'
            ></input>
            
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <textarea
            rows="7"
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter the message you want to ask me"
            className='bg-teritary py-4 px-6 placeholder:text-secondary text-white rounded-lgoutlined-none norder-none font-medium'
            ></textarea>
            
          </label>
          <button
          type="submit"
          className='bg-teritary py-3 px-8 text-white font-bold shadow-primary w-fit outline-none shadow-md rounded-xl'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* now this one is for the earth... means, you can reach to me from anyplace */}
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas isMobile={isMobile}/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")