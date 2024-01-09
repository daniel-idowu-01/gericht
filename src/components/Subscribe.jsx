import React from 'react'
import Design from '../pages/images/Vector.svg'

const Subscribe = () => {
  return (
    <section className='text-center bg-subscribeBg p-10 pb-20 shadow-xl'>
      <p>Newsletter</p>
      <img alt='' src={Design} className='block w-5 h-5 absolute left-1/2' />
      <h3 className='text-goldcolor text-4xl mt-5'>Subscribe To Our Newsletter</h3>
      <p className=' text-base mt-7'>And never miss latest updates</p>
      
      <div className="flex justify-center mt-5">
        <form className="flex items-center" action='#'>
          <input
            type="email"
            placeholder="Email Address"
            className=" w-60 md:w-96 p-2 px-4 border mr-5 border-gray-400 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-goldcolor hover:opacity-75 hover:text-white text-black px-4 py-2"
          >
            Subscribe
          </button>
        </form>
      </div>
  </section>
  )
}

export default Subscribe
