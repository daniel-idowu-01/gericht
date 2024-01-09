import React, { useEffect } from 'react'
import Design from '../pages/images/Vector.svg'
import G from '../pages/images/G.png';
import Knife from '../pages/images/knife.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section
      data-aos="flip-right"
      className='mt-10 sm:mt-0 bg-bgColor w-full block md:flex justify-betweeen md:justify-center md:items-center p-10 sm:py-40 sm:px-32'
    >
      {/* About Us */}
      <div className='text-center md:text-right z-10 relative'>
          <h3 className='text-goldcolor text-4xl'>About Us</h3>
          <img alt='' src={Design} className='block w-5 h-5 absolute right-1/2 md:right-0' />
          <p className='w-full md:w-96 mt-10 md:mt-8 text-dimBlack text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <button className='bg-goldcolor px-8 py-2 mt-8 text-black hover:bg-opacity-80'>
            Read More
          </button>
      </div>

      <img alt='' src={G} className='hidden md:block absolute w-64 h-64 opacity-50' />

      {/* Knife Image */}
      <div className='z-10'>
        <img alt='' className='hidden md:block w-fit h-96 mx-14' src={Knife} />
      </div>

      {/* Our History */}
      <div className='text-center md:text-left mt-16 md:mt-0 z-10 relative'>
          <h3 className='text-goldcolor text-4xl'>Our History</h3>
          <img alt='' src={Design} className='block absolute w-5 h-5 left-1/2 md:left-0 rotate-180' />
          <p className='w-full md:w-96 mt-10 md:mt-8 text-dimBlack text-xl'>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <button
            className='bg-goldcolor px-8 py-2 mt-8 text-black hover:bg-opacity-80'
          >
            Read More
          </button>
      </div>
    </section>
  )
}

export default About
