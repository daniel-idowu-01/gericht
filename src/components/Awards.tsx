import React, { useEffect } from 'react'
import ListGroup from '../pages/ListGroup.tsx'
import Design from '../pages/images/Vector.svg'
import Food1 from '../pages/images/food-1.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Awards = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section
      data-aos="flip-left"
      className='bg-bgColor flex flex-col sm:flex-row gap-10 justify-around p-10 sm:py-40 sm:px-32'>
        
      <div className='text-center md:text-left mt-10 md:mt-0'>
        <p>Awards & recognition</p>
        <img alt='' src={Design} className='absolute left-1/2 w-5 h-5 md:relative md:left-0' />
        <h2 className='text-goldcolor text-4xl mt-5 mb-10'>Our Laurels</h2>
        
        <div className='flex justify-between gap-5'>
            <ListGroup name='Rising Star' desc='Lorem ipsum dolor sit amet, consectetur.' />
            <ListGroup name='Outstanding Chef' desc='Lorem ipsum dolor sit amet, consectetur.' />   
        </div>
        <div className='flex mt-10 gap-5'>
            <ListGroup name='Bib Gourmond' desc='Lorem ipsum dolor sit amet, consectetur.' />
            <ListGroup name='AA Hospitality ' desc='Lorem ipsum dolor sit amet, consectetur.' />   
        </div>
      </div>

      <div className='shrink-0 relative grid place-items-center'>
        <img alt='' src={Food1} className='h-96 w-96 z-40 relative' />
      </div>
    </section>

  )
}

export default Awards
