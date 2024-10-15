import React from 'react'
import ProductCard from './ProductCard'
import { useProductContext } from '../contect/ProductContext'

function Home() {

  const {allProduct,isloading} = useProductContext() 
  // console.log(allProduct.products.length,"product list");
  

  return (
    <div className=' max-w-screen-2xl min-h-screen '>
        <div className='w-full h-96 ' >
            <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1664202526828-6f18286508d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='sm:text-4xl text-md font-bold text-[#411f0f] text-center sm:py-10 py-4 underline'>New Arrivals</h1>
        </div>

        {/* cards here */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 lg:px-10 sm:gap-3 gap-10 px-10 sm:px-10 sm:py-10 py-10 sm:mt-32 mt-20 '>
               {isloading ? allProduct?.products?.length > 0 ? allProduct.products.map((item) => <ProductCard  item={item} />) : 'no data'  : "Loading Data ....."}
        </div>

    </div>
  )
}

export default Home