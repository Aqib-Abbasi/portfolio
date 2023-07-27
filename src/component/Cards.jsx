import React from 'react'
import nature from '../assets/nature.jpg'
import food from '../assets/food.jpg'

const Cards = () => {
  return (
    <div className='py-[100px] px-2' id='project'>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
            <div className="shadow-xl h-[500px] hover:scale-105 duration-500 py-3">
              <img src={nature} alt='img' />
              <p>Nature</p>
            </div>
            <div className="shadow-xl h-[500px] hover:scale-105 duration-500 py-3">
              <img src={food} alt='img' className='h-[300px]'/>
              <p>Food</p>

            </div>
            <div className="shadow-xl h-[500px] hover:scale-105 duration-500 py-3">
            <img src={nature} alt='img' />
            <p>Nature</p>


            </div>

        </div>
    </div>
  )
}

export default Cards