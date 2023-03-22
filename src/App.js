import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import Food from './pages/Food';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Order from './pages/Order';
import Login from './pages/Login';
import BookTable from './pages/BookTable';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaArrowUp } from "react-icons/fa";
import { QueryClient, QueryClientProvider } from 'react-query';



function App() {

  const queryClient = new QueryClient()

  // quick scroll to topp button function
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  
  return (
      <QueryClientProvider client={queryClient}>

      <Helmet>
        <title>Gericht</title>
      </Helmet>

      <div className="App">
        <Nav />
      </div>
      <div className='body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/food' element={<Food />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/order' element={<Order />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booktable' element={<BookTable />} />
        </Routes>
      </div>

      <button className=' hover:opacity-75 hover:text-white fixed bottom-4 right-4 bg-goldcolor p-3 border text-black rounded-full'> <FaArrowUp onClick={handleClick} /> </button>
    </QueryClientProvider>
  );
}

export default App;
