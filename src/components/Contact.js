import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser' //this will help the people to send us email
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
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
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className=''>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")