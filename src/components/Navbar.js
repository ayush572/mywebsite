import React, { useEffect, useState } from 'react'
import {styles} from '../styles'
import {navLinks} from '../constants/index.js'
import { Link } from 'react-router-dom'

const Navbar = ({isMobile}) => {
  const [active, setActive]=useState('')
  const [toggle, setToggle]=useState(false)
  useEffect(()=>{
    console.log("toggled state:", toggle)
  },[toggle])
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 top-0 bg-primary fixed z-10`}
    >
      <div className='flex flex-row justify-evenly items-center mx-auto'>
        <div className={isMobile ? 'flex flex-row gap-8':'flex flex-row gap-10'}>
        <Link to="/" className='flex items-center gap-5' onClick={()=>{
          setActive("")
          window.scrollTo(0, 0)
        }}>
          
          <img src="logo.jpeg" alt="logo" className="w-12 h-12 object-cover" style={isMobile ? {width: '60px', height: '60px', borderRadius: '100%'}:{width: '80px', height: '80px', borderRadius: '100%', marginRight: '0px'}}/>
          </Link>
          <div>
          <p className={isMobile?'text-white text-[18px] font-bold cursor-pointer text-center mt-[10px]':'text-white text-[24px] font-bold cursor-pointer text-center mt-[10px]'}>Ayush Daga </p>
          <span className='text-secondary' style={isMobile ? {fontSize: '12px'}:{}}><a href='https://www.linkedin.com/in/ayush-daga-5218421b8/' target='_blank' style={{cursor: 'pointer'}} className='hover:text-white'>Linkedin</a> | <a href='https://github.com/ayush572' target='_blank' style={{cursor: 'pointer'}} className='hover:text-white'>Github</a> | <a href='https://leetcode.com/ayushdagaeinstein/' target='_blank' style={{cursor: 'pointer'}} className='hover:text-white'>Leetcode</a></span>
          
          </div>
          </div>
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