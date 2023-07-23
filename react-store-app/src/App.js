import {React, useEffect, useState} from 'react';
import { motion } from 'framer-motion';

import ProductCard from './ProductCard';
import NavSlider from './NavSlider';

import { Checkbox, CircularProgress } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function App() {

  const [products, setProducts] = useState([]);
  const [toggleNav, setNavState] = useState(null);
  const [responseStatus, setStatus] = useState(null);
  const [categories, setCategories] = useState([]);


  async function getStore(CATEGORY=false) {
    let response
    let data
    if (CATEGORY) {
      response = await fetch(`https://fakestoreapi.com/products/category/${CATEGORY}`);
      data = await response.json();
    } else {
      response = await fetch(`https://fakestoreapi.com/products`);
      data = await response.json();
    }

    setStatus(response.ok);
    setProducts(data);

  }
  async function getCategories() {

    const response = await fetch('https://fakestoreapi.com/products/categories');
    const Datacategories = await response.json();

    setCategories(Datacategories);
  
  }
  
  useEffect(() => {

    getCategories();

  }, [])

  useEffect(() => {

    getStore();

  }, []);

  return (
    <div className="App text-white text-center">
      <header className='flex justify-between items-center p-4 shadow-xl relative'>
        <h1 className='text-xl'>E-React Store</h1>
        <Checkbox  className='z-[1]' icon={<MenuIcon className='text-white' />} checkedIcon={<MenuOpenIcon />} onChange={() => setNavState((prevValue) => prevValue = !prevValue)}/>
      </header>
      <main className='flex overflow-hidden'>
        {
          responseStatus
          ? (
            products?.length > 0
            ? (
                <motion.div
                animate={{y: ["-60%", "0%"]}}
                transition={{type: 'spring', ease: "easeOut", duration: 0.9 }}
                className='flex-1 container h-screen space-y-5 mx-auto py-8 overflow-hidden overflow-y-auto'
                >
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                  ))}
                </motion.div>
            ) : (
              <div className='flex-1 container text-center mx-auto py-8'>
                <h1 className='text-2xl font-semibold text-red-400'>No Products Avaliable</h1>
              </div>
            )
          ) : (
            <div className='flex-1 container text-center mx-auto py-20'><CircularProgress color="info" size={'4rem'}/></div>
          )
        }

        {
          toggleNav
          ? (
            <NavSlider categories={categories} getStore={getStore}/>
          ) : (
            null
          )
        }
      </main>
    </div>
  );
}

export default App;
