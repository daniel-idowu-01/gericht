import React from 'react'
import Design from '../pages/images/Vector.svg'

const Footer = () => {
  return (
    <section
      className='flex flex-col sm:flex-row text-center items-start justify-center sm:justify-between px-10 py-20 sm:p-40 gap-10 sm:gap-0'
    >
      <div className='w-full sm:w-auto'>
        <h2 className='text-2xl mb-5'>Contact Us</h2>
        <div className='text-xl'>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
        </div>
      </div>

      <div className='w-full sm:w-auto'>
        <h1 className='text-goldcolor text-4xl sm:text-5xl'>GERICHT</h1>
        <p className='w-full text-xl'>"The best way to find yourself is to lose yourself</p>
        <p className='w-full text-xl'> in the service of others.”</p>
        <img alt='' src={Design} className='block w-5 h-5 mx-auto' />

      </div>

      <div className='w-full sm:w-auto'>
        <h2 className='text-2xl mb-5'>Working Hours</h2>
        <div className='text-xl'>
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
            <p className='mt-5'> Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
        </div>
      </div>
  </section>
  )
}

export default Footer
