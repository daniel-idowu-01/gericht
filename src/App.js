import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import Food from './pages/Food';
import SingleFoodComp from './pages/SingleFoodComp';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Order from './pages/Order';
import Login from './pages/Login';
import SavedMeals from './pages/SavedMeals';
import BookTable from './pages/BookTable';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from './pages/Context';



function App() {

  const queryClient = new QueryClient()

  // quick scroll to top button function
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <>
      <CartProvider>  
        <div className="App">
          <Nav />
        </div>
        <div className='body'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/food' element={<Food />} />
            <Route path='/food/:foodname' element={ <SingleFoodComp /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/blog' element={ <Blog /> } />
            <Route path='/order' element={ <Order /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/saved-meals' element={ <SavedMeals /> } />
            <Route path='/booktable' element={ <BookTable /> } />
          </Routes>
        </div>
      </CartProvider>

       <button
       className='z-50 hover:opacity-75 hover:text-white fixed bottom-4 right-4 bg-goldcolor p-3 border text-black rounded-full'
       >
         <FaArrowUp
          onClick={handleClick} />
       </button>
    </>
  );
}

export default App;
