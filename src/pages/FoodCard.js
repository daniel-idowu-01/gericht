import React from 'react'


function FoodCard(props) {
  return (
    <div className='border p-5 m-5' >
      <div>
          <img className='' src= {props.image} alt=''  /> 
          <h1 className='text-center text-xl p-2'> {props.name} </h1>
     </div>
    </div>
  )
}

export default FoodCard
