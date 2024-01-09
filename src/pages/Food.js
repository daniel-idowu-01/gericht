import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import FoodCard from './FoodCard';

function Food() {
  
  const [mealCategory, setMealCategory] = useState('Seafood');
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  /* To get the API */
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategory}`)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setMeals(data.meals);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, [mealCategory]);

  /* To change the category value in the API */
  const handleCategoryChange = event => {
    setMealCategory(event.target.value);
  };

  /* Action when content is loading */
  if (isLoading) {
    return <p className='text-3xl h-screen bg-black text-white text-center py-5 md:py-10'>
      Loading...
    </p>;
  }

  /* Action when content contains error */
  if (error) {
    return <p className='text-3xl h-screen bg-black text-white text-center py-5 md:py-10'>
      Error: {error.message}
    </p>;
  }

  const fullData = meals.map(meal => (
      <Link to={`/food/${meal.strMeal}`}  key={meal.idMeal} >
        <FoodCard image={meal.strMealThumb} name={meal.strMeal} />
      </Link>
))

  return (
    <div className='bg-black text-white pages'>
      <select className='border md:ml-5 mb-5 bg-black text-white text-xl p-2  w-full md:w-1/4 justify-center outline-none' value={mealCategory} onChange={handleCategoryChange}>
        <option value="Seafood">Seafood</option>
        <option value="Chicken">Chicken</option>
        <option value="Beef">Beef</option>
        <option value="Dessert">Dessert</option>
        <option value="Lamb">Lamb</option>
        <option value="Pasta">Pasta</option>
        <option value="Side">Side</option>
        <option value="Starter">Starter</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Goat">Goat</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <ul className='md:grid md:grid-cols-3'>
        { fullData }
      </ul>
    </div>
  );
}

export default Food;
