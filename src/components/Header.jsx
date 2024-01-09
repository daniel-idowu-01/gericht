import React, { useEffect } from 'react'
import HeadImg from '../pages/images/Hero-img.png'
import yellowBg from '../pages/images/yellowBg.png'
import Design from '../pages/images/Vector.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <section
       data-aos="flip-left"
      className="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between items-center p-10 sm:py-20 sm:px-32"
    >
      <div className='flex flex-col gap-5 sm:gap-10'>
        <div>
          <p>Chase The New Flavour</p>
          <img alt='' src={Design} className='w-5 h-5' />
        </div>
        <h1 className='text-goldcolor text-4xl sm:text-6xl w-auto tracking-wider leading-tight'>
          The Key To Fine Dining
        </h1>
        <p className='w-auto sm:w-[70%] text-xl sm:text-2xl leading-relaxed'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button className='w-1/2 sm:w-[20%] bg-goldcolor px-4 py-3 text-black hover:bg-opacity-80'>
          Explore Menu
        </button>
      </div>

      <div className='shrink-0 relative'>
        <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -top-3 -right-3 z-10' />
        <img alt='' src={HeadImg} className = 'h-96 w-96 z-40 relative' />
        <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -bottom-3 -left-3 z-10' />
      </div>
    </section>
  )
}

export default Header
