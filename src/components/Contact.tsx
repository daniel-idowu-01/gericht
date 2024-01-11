import React from 'react'
import yellowBg from '../pages/images/yellowBg.png'
import ContactImg from '../pages/images/contact-img.png'
import Design from '../pages/images/Vector.svg'

const Contact = () => {
  return (
    <section className='p-10 sm:px-32 flex flex-col sm:flex-row gap-8 justify-between'>
      <div className='text-left'>
        <p>Contact</p>
        <img alt='' src={Design} className='block w-5 h-5' />
        <h3 className='text-goldcolor text-4xl mt-2'>Find Us</h3>
        <p className='w-full sm:w-[90%] mt-5 text-dimBlack text-xl'>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className='text-goldcolor mt-3 text-xl'>Opening Hours</p>
        <p className='mt-2 text-xl'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='mt-2 text-xl'>Sat - Sun: 10:00 am - 03:00 am</p>
        <button className='bg-goldcolor px-6 py-2 mt-8 text-black hover:bg-opacity-80'>
            Visit Us
        </button>
      </div>

      <div className='shrink-0 relative grid place-items-center'>
        <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -top-5 sm:-right-5 right-0 z-10' />
        <img alt='' src={ContactImg} className='w-96 h-96 relative z-40' />
        <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -bottom-5 sm:-left-5 left-0 z-10' />
      </div>
  </section>
  )
}

export default Contact
