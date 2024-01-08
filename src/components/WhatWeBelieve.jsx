import React from 'react'
import yellowBg from '../pages/images/yellowBg.png'
import RonLach from '../pages/images/ron-lach.png'
import Design from '../pages/images/Vector.svg'

const WhatWeBelieve = () => {
  return (
    <section
      className='bg-bgColor flex flex-col sm:flex-row gap-5 sm:gap-0 justify-around p-10 sm:py-40 sm:px-32'
    >
      <div className='shrink-0 relative grid place-items-center'>
        <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -top-3 sm:-right-5 right-5 z-10' />
        <img alt='' src={RonLach} className='w-96 h-96 relative z-40' />
        <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -bottom-3 sm:-left-5 left-5 z-10' />
      </div>

      <div className='text-center md:text-left mt-10 md:mt-0'>
        <p>Chef's Word</p>
        <img alt='' src={Design} className='absolute left-1/2 w-5 h-5 md:relative md:left-0' />
        <h2 className='text-goldcolor text-4xl mt-5 mb-10'>What We Believe In</h2>
        <blockquote className="border-l-2 border-goldcolor pl-4 italic text-gray-600">
            <p className="mb-2 text-xl w-auto md:w-96">
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
            </p>
            <footer className="text-gray-500">
                <p className='text-2xl text-goldcolor opacity-75'>Kevin Luo</p>
                <h6>Chef & Founder</h6>
            </footer>
        </blockquote>
        <p className='signature text-5xl opacity-50 mt-7'>Kevin Luo</p>
      </div>
    </section>
  )
}

export default WhatWeBelieve
