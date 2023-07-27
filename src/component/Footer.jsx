import React from 'react'
import {BiLogoLinkedin,BiLogoFacebook} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-[#2699fb] w-full py-4' >

    <div className="ml-[30px] mx-auto md:grid grid-cols-4 py-[50px] ">
        <div className='m-2 col-span-1'>
            <h1 className='text-[16px] md:text-[20px]  font-[600]  '>Phone</h1>
            <span className='my-5  text-white'>+92-310-1585896</span>
        </div>
        <div className='m-2 col-span-1'>
        <h1 className='text-[16px] md:text-[20px]  font-[600]'>Email</h1>
        <span className='my-5  text-white'>aqib@gmail.com</span>

        </div>
        <div className='m-2 col-span-1'>
        <h1 className='text-[16px] md:text-[20px]  font-[600]'>Follow</h1>
       <div className='flex gap-3'>
        <Link to=''><span className='text-2xl  text-white'><BiLogoLinkedin/></span></Link>
        <Link to=''><span className='text-2xl  text-white' ><BiLogoFacebook/></span></Link>
        </div> 


        </div> <div className='m-2 col-span-1'>
        <p className='text-[14px] md:text-[16px]  '>Copyright &copy; 2023</p>
        <p className='text-white'>Make by aqib anwar abbasi</p>
        </div>

    </div>
</div>
  )
}

export default Footer
