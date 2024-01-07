import React from 'react'
import CartContext from '../pages/Context' 
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

const SingleFoodComp = () => {
    const [eachMeals, setEachMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext)
    const { foodname } = useParams();

     /* To get the API from themealdb website */
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${foodname}`)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setEachMeals(data.meals);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, [foodname]);

    /* Action when content is loading */
    if (isLoading) {

        return <p className='text-3xl'>Loading...</p>;
    }

    /* Action when content contains error */
    if (error) {
        return <p className='text-3xl'>Error: {error.message}</p>;
    }

  return (
    <div className='bg-black text-white pb-12'>
          <Link to='/food' className='opacity-50  underline ml-5'>
              <AiOutlineArrowLeft className=' inline-block' /> previous page
           </Link>
        { eachMeals.map(meal => (
            <div
             className='text-left'
             key={meal.idMeal}>
                <h1 className='opacity-50 text-3xl text-center mt-5'> MEAL DETAILS </h1>
                <div className='flex flex-col md:flex-row justify-around gap-5 px-5 mt-5 md:mt-10'>
                    {/* Product Image and Product Name */}
                    <section className='w-1/2'>
                        <img className='border border-opacity-80 p-5' src={meal.strMealThumb} alt='' />
                    </section>
                    
                    {/* Product category and Area */}
                    <section className='flex flex-col gap-5'>
                        <p className='w-80 uppercase text-5xl'> {meal.strMeal} </p>
                        <div className=' text-white text-opacity-30'>
                            <p>Category: {meal.strCategory}</p>
                            <p>Area: {meal.strArea}</p>
                        </div>
                        <iframe src='https://youtu.be/1IszT_guI08' title='Youtube Video' className='w-full md:w-2/3' allowFullScreen>Video can not be displayed</iframe>
                    </section>
                    
                </div>


                <section className='flex flex-col md:flex-row justify-around mt-20'>
                    {/* Ingredients table */}
                    <div className='grid place-items-center'>
                        <h2 className='opacity-50 text-3xl text-center'>INGREDIENTS</h2>
                        <table className="border border-opacity-90 text-center mt-5">
                            <thead>
                                <tr>
                                    <th className='p-5 text-xl'>Ingredients</th>
                                    <th className='p-5 text-xl'>Measure</th>
                                </tr>
                            </thead>
                            <tbody className=" bg-black text-white">
                                <tr className=' bg-gray-900'>
                                    <td className="px-6 py-4 ">{meal.strIngredient1}</td>
                                    <td className="px-6 py-4 ">{meal.strMeasure1}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 ">{meal.strIngredient2}</td>
                                    <td className="px-6 py-4 ">{meal.strMeasure2}</td>
                                </tr>
                                <tr className=' bg-gray-900'>
                                    <td className="px-6 py-4">{meal.strIngredient3}</td>
                                    <td className="px-6 py-4">{meal.strMeasure3}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">{meal.strIngredient4}</td>
                                    <td className="px-6 py-4">{meal.strMeasure4}</td>
                                </tr>
                                <tr className=' bg-gray-900'>
                                    <td className="px-6 py-4">{meal.strIngredient5}</td>
                                    <td className="px-6 py-4">{meal.strMeasure5}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">{meal.strIngredient6}</td>
                                    <td className="px-6 py-4">{meal.strMeasure6}</td>
                                </tr>
                                <tr className=' bg-gray-900'>
                                    <td className="px-6 py-4">{meal.strIngredient7}</td>
                                    <td className="px-6 py-4">{meal.strMeasure7}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">{meal.strIngredient8}</td>
                                    <td className="px-6 py-4">{meal.strMeasure8}</td>
                                </tr>
                                <tr className=' bg-gray-900'>
                                    <td className="px-6 py-4">{meal.strIngredient9}</td>
                                    <td className="px-6 py-4">{meal.strMeasure9}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">{meal.strIngredient10}</td>
                                    <td className="px-6 py-4">{meal.strMeasure10}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='md:w-1/2 flex justify-center items-center mt-20 md:mt-5'>
                        <article>
                            <h2 className='opacity-50 text-3xl text-center'>INSTRUCTIONS</h2>
                            <p className=' text-justify leading-10 px-10'> {meal.strInstructions} </p>
                        </article>
                        
                    </div>
                </section>


                <div className='mt-5 md:mt-10'>
                    {/* save meal */} 
                    <div className='flex justify-center items-center '>
                        <button
                         onClick={() => addToCart(meal.strMealThumb, meal.strMeal , meal.strCategory)}
                         className='bg-goldcolor px-8 py-2 mt-8 text-black hover:opacity-75 hover:text-white'>
                            Save Meal
                        </button>
                        <Link
                         to='/saved-meals'
                          className='opacity-50 underline ml-5 relative top-5'>
                             Go to Saved Meals<AiOutlineArrowRight
                              className=' inline-block' />
                               </Link>
                    </div>
                </div>
                
            </div>
            
        )) }



    </div>
  )
}

export default SingleFoodComp
