import React, { useEffect, useState } from 'react'
import {styles} from '../styles'
import {navLinks} from '../constants/index.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive]=useState('')
  const [toggle, setToggle]=useState(false)
  useEffect(()=>{
    console.log("toggled state:", toggle)
  },[toggle])
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 top-0bg-primary`}
    >
      <div className='flex flex-row justify-evenly items-center mx-auto'>
        <Link to="/" className='flex items-center gap-10' onClick={()=>{
          setActive("")
          window.scrollTo(0, 0)
        }}>
          
          <img src="logo.jpeg" alt="logo" className="w-12 h-12 object-cover" style={{width: '80px', height: '80px', borderRadius: '100%'}}/>
          <div>
          <p className='text-white text-[24px] font-bold cursor-pointer'>Ayush Daga </p>
          <span className='sm:block hidden'>Software Developer | Tech Enthusiast</span>
          <span className='sm:block hidden'>| Blockchain Developer | AI-ML | </span>
          <span className='sm:block hidden'>| Web Developer | </span>
          </div>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link, index) => (
            <li key={link.id} className={`${active === link.title ? "text-white":"text-secondary"}
            hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* here comes for the mobile devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? "close.png" : "menu.png"} alt="menu" className='w-[28px] h-[28px] object-contain cursot-pointer' onClick={()=>setToggle(!toggle)}/>
          <div className={`${toggle ? "flex":"hidden"} p-6 black-gradient top-20 right-0 mx-4 absolute my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link, index) => (
            <li key={link.id} className={`${active === link.title ? "text-white":"text-secondary"}
            font-poppins font-medium cursor-pointer text-[16px]`} onClick={()=>{
              setToggle(!toggle)
              setActive(link.title)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar