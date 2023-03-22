import React, { useState, useEffect } from 'react';

function Order() {

    const [mealSearch, setMealSearch] = useState('Arrabiata')
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [randomNumber, setRandomNumber] = useState(50)
    const [quantity, setQuantity] = useState(1)

    /* To get the API */
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setMeals(data.meals)
      })
      .catch(error => {
        setIsLoading(false);
        setError(error)
      })
  }, [mealSearch]);

  /* To change the meal name value in the API */
  const searchFood = event => {
    setMealSearch(event.target.value)
  }

  // to get random number
  const getRandomNumber = () => {
      const number = Math.floor(Math.random() * 100); // generates a random number between 0 and 99
      setRandomNumber(number);
  }

  /* Action when content is loading */
  if (isLoading) {
    return <p className='text-3xl'>Loading...</p>;
  }

  /* Action when content contains error */
  if (error) {
    return <p className='text-3xl'>Error: {error.message}</p>;
  }

  /* Quantity Counter */
  const decrement = () => {
    setQuantity(quantity - 1)
  }
 
  const increment = () => {
    setQuantity(quantity + 1)
  }

  // to create dead link
  const deadLInk = (event) => {
    event.preventDefault()
}

  return (
    <div className='grid place-items-center bg-black text-white pb-auto'>
        <div className='flex'>
            <input className='border bg-transparent p-2 w-60 md:w-96 outline-none' type='search'  placeholder='Search Food...' onBlur={searchFood} />
            <button className='p-2 px-7 bg-goldcolor text-black hover:opacity-75 hover:text-white' onClick={searchFood} onFocus={getRandomNumber}>Search</button>
        </div>
        {/* Each food item */}
        <div className=''>
          { meals.map(meal => (
            <div key={meal.idMeal} className='border p-2 m-2'>
              <img src={meal.strMealThumb} alt={meal.strMeal} className='w-96 h-96' />
              <h2>{meal.strMeal}</h2>
              {/* Div to flex the price and quantity */}
                <div className='flex justify-between'>
                  <p className='text-xl'>${randomNumber}</p>
                </div>
            </div>
          ))}
          {/* for the quantity counter */}
          <div className='flex'>
                    <button className='bg-goldcolor rounded-full py-2 px-4 text-black hover:opacity-75 hover:text-white' onClick={decrement}>-</button>  
                    <p className='ml-5'>{quantity >= 1 ? quantity: null}</p>
                    <button className='bg-goldcolor rounded-full py-2 px-4 ml-5 text-black hover:opacity-75 hover:text-white' onClick={increment}>+</button>
                  </div>
          <hr className='opacity-30 mt-5'/>
      </div>
      
      {/* Total Price */}
      <p className='mt-3 text-sm opacity-50'>Total price: ${randomNumber * quantity}</p>
      <button onClick={deadLInk} className='p-2 px-10 mt-10 mb-10 bg-goldcolor text-black rounded-full hover:opacity-75 hover:text-white'>Order</button>
    </div>

  );
}
export default Order;