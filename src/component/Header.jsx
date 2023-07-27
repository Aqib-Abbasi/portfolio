import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose,AiOutlineHome} from 'react-icons/ai'
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'
const Header = () => {
    const[toggle,setToggle]=useState(false)
  return (
    <>
    <div className='bg-[#2699fb] p-4' >
      <div className='max-w-[1240px] py-[12px] flex justify-between  mx-auto items-center'>
       <Link to='/'> <div className='text-3xl font-bold w-full flex gap-3 cursor-pointer text-yellow-400'>
         <AiOutlineHome/><span className='md:text-3xl text-xl '>Aqib Abbasi</span> 
        </div></Link>
        {
            toggle ? <AiOutlineClose className='text-white text-2xl md:hidden block' onClick={()=>setToggle(!toggle)}/>
            :
            <AiOutlineMenu className='text-white text-2xl md:hidden block' onClick={()=>setToggle(!toggle)}/>


        }
        <ul className='text-white md:flex hidden gap-4'>
         <Link to="/" ><li className='cursor-pointer'>Home</li></Link> |
         <Link to="/about"  ><li className='cursor-pointer'>About</li></Link> |
         <Link to="/resume" ><li className='cursor-pointer'>Resume</li></Link> |
         <Link to="/contact" ><li>Contact</li></Link> 

        </ul>
        {/* Responsive Mobile */}
        <ul className={ ` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] left-[-100%] ${toggle ? 'left-[0]': 'left-[-100%]'} `}>
          <li className='p-5'>Home</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Project</li>
          <li className='p-5'>Resume</li>
          <li className='p-5'>Contact</li>

        </ul>
      </div>
    </div>


    </>
  )
}

export default Header

// spy={true} smooth={true} offset={-100} duration={600} Link classes from react scroll