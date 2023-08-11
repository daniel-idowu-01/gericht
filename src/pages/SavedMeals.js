import React, { useContext } from 'react'
import CartContext from './Context';

const Cart = () => {

  const { items } = useContext(CartContext)

    return (
      <div className={` bg-black text-white p-5`}>
        {
          items.length > 0
           ?
           <table className='w-full text-center table'>
            <thead className='uppercase border border-gray-100'>
              <tr>
                <th className='p-5'>Image</th>
                <th className='p-5'>Name</th>
                <th className='p-5'>Category</th>
              </tr>
            </thead>

          <tbody>
            { items.length > 0
             ?
              items.map((item, index) => (
                <tr
                 key={index}>
                  <td className='p-2'>
                    <img
                    className='w-full md:h-64 object-cover' alt=''
                      src={item.image}
                      />
                  </td>
                  <td className='p-2'>
                    <h1 className='text-xl uppercase'> {item.name} </h1>
                  </td>
                  <td className='p-2'>
                    <p> {item.category} </p>
                  </td>
                </tr>
              ))
            :
            <p>There are no saved meal</p>
            }
          </tbody>
        </table>
        :
        <p className=''>There are no saved meals</p>}
      </div>
    );
}

export default Cart
