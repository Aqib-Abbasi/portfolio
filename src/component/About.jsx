import React from 'react'
import laptop from '../assets/laptop.jpg'
const About = () => {
    return (
        <div className='max-w-[1240px] mx-auto  my-10  md:grid grid-cols-2  '  >
            <div className='  col-span-1 md:w-[80%] text-center  '>
                <img src={laptop} alt='image' />
            </div>
            <div className='  col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold my-2'>About Section</h1>
                <p className='my-2  '>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                    the visual form of a document or a typeface without relying on meaningful content.</p>

                <button className='text-white rounded bg-black py-2 px-2 w-[30%]'>Get Started</button>
            </div>

            

        </div>
    )
}

export default About