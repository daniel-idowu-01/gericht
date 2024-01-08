import React from 'react'
import Food2 from '../pages/images/food-2.png'
import Food3 from '../pages/images/food-3.png'
import Food4 from '../pages/images/food-4.png'
import Food5 from '../pages/images/food-5.png'
import Design from '../pages/images/Vector.svg'

const PhotoGallery = () => {
  return (
    <section className='p-10 sm:py-40 sm:px-32 md:flex md:justify-between'>
      <div className='text-left relative'>
        <p>Instagram</p>
        <img alt='' src={Design} className='block w-5 h-5' />
        <h3 className='text-goldcolor text-4xl mt-2'>Photo Gallery</h3>
        <p className='w-full sm:w-[90%] mt-5 text-xl text-dimBlack'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className='bg-goldcolor px-6 py-2 mt-8 text-black hover:bg-opacity-80'>
            View More
        </button>
      </div>

      <div className='flex flex-col sm:flex-row gap-5 mt-5 md:mt-0 shrink-0'>
        <img src={Food2} alt='' className='w-full md:w-40 md:h-64 ' />
        <img src={Food3} alt='' className='w-full md:w-40 md:h-64' />
        <img src={Food4} alt='' className='w-full md:w-40 md:h-64' />
        <img src={Food5} alt='' className='w-full md:w-40 md:h-64' />
      </div>
    </section>
  )
}

export default PhotoGallery
