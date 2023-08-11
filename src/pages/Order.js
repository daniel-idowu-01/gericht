import React, { useState, useEffect } from 'react';
import quantity from './SingleFoodComp'

function Order() {

  // to create dead link
 /*  const deadLInk = (event) => {
    event.preventDefault()
} */
console.log(quantity)
  return (
    <div className=''>
        {quantity}
    </div>

  );
}
export default Order;