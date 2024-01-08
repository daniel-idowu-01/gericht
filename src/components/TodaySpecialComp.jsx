import React from 'react'
import TodaySpecial from '../pages/TodaySpecial'
import Jug from '../pages/images/jug.png'
import Design from '../pages/images/Vector.svg'

const TodaySpecialComp = () => {
  return (
    <section className='p-10 sm:py-40 sm:px-32'>
      <p className='text-center'>Menu That Fits Your Palatte</p>
      <img alt='' src={Design} className='w-5 h-5 absolute left-1/2' />
      <h2 className='text-goldcolor text-center text-4xl mt-7 mb-7'>Today's Special</h2>

      <div>                        
          {/* Div to flex the contents */}
          <div className='block md:flex justify-evenly'>
              {/* Div for each row */}
              <div className='md:w-1/3 mt-10'>
                  <h3 className='text-center md:w-full text-2xl'>Wine & Beer</h3>
                  <TodaySpecial name='Chapel Hill Shiraz' desc='AU | Bottle' price='$56'/>
                  <TodaySpecial name='Catena Malbec' desc='AR | Bottle' price='$59'/>
                  <TodaySpecial name='La Vieille Rosé' desc='FR | 750 ml' price='$44'/>
                  <TodaySpecial name='Rhino Pale Ale' desc='CA | 750 ml' price='$31'/>
                  <TodaySpecial name='Irish Guinness' desc='IE | 750 ml' price='$26'/>
              </div>

              <div className=' mt-10 md:mt-0 md:w-1/3'>
                  <img className='w-full' alt='' src={Jug} />
              </div>

              <div className='md:w-1/3 mt-10 '>
                  <h3 className='text-center md:w-full text-2xl'>Cocktails</h3>
                  <TodaySpecial name='Aperol Spritz' desc='Aperol | Villa Marchesi prosecco | soda | 30ml' price='$20'/>
                  <TodaySpecial 
                  name='Catena Malbec' desc='Dark rum | Ginger beer | Slice of lime. ' price='$16'/>
                  <TodaySpecial 
                  name='Daiquiri' desc='Rum | Citrus juice | Sugar' price='$10'/>
                  <TodaySpecial 
                  name='Old Fashioned' desc='Bourbon | Brown sugar | Angostura Bitters' price='$31'/>
                  {/* <TodaySpecial name='Negroni' desc='Gin | Sweet Vermouth | Campari | Orange garnish' price='$26'/>  */}       
              </div>
          </div>
          {/* End of div to flex the contents */}
      </div>
  </section>
  )
}

export default TodaySpecialComp
