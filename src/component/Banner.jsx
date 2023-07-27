import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import Typed from 'react-typed'
const Banner = () => {
  return (
    <>
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto  text-center font-bold'>
            <div className='md:text-3xl text-xl mb-3'>
                Hi, I Am
            </div>
            <h2 className='text-white md:text-[60px] text-2xl '>Aqib Anwar Abbasi</h2>

            <div className='text-white  text-[25px] md:text-[40px]'>
                I am <Typed className='pl-2 '
                strings={['Front-End And React-js Developer']}
                typeSpeed={100} loop={true} backSpeed={80}/>
            </div>
            <button className='text-white rounded bg-black py-2 px-2'>Get Started</button>
        </div>
      
    </div>
    <Cards/>
    </>
  )
}

export default Banner
