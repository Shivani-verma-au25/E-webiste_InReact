import React from 'react'
import { useProductContext } from '../contect/ProductContext'
import MiniCarts from './MiniCarts';
import { useNavigate } from 'react-router-dom';


function Cart() {
  const {cartItem} = useProductContext()
  // console.log(cartItem,"cart");
  const navigate = useNavigate()
  
  
  return (
    <div className='w-full container mx-auto sm:px-10 sm:py-10 bg-gray-300'>
        <h1 className='sm:text-3xl sm:py-10 '>Shopping Cart</h1>
        <div className='w-full  flex gap-10 '>
          <div className='w-[70%] '>
            <div className='flex  sm:flex sm:justify-between sm:px-10 sm:py-4 py-5'>
              <h1 className='sm:text-xl sm:font-semibold text-lg font-semibold'>Product</h1>
              <h1 className='sm:text-xl sm:font-semibold text-lg font-semibold'>Quantity</h1>
              <h1 className='sm:text-xl sm:font-semibold text-lg font-semibold'>Total Price</h1>
            </div>
            {cartItem && cartItem?.length> 0 ? cartItem.map((item) =>  <MiniCarts  item={item} />) : 'No Data'}
          </div>
          <div className='w-[30%] text-zinc-200 h-full bg-[#202731] mt-16'>
            <h1 className='sm:text-2xl sm:px-16 sm:py-3 '>Summary</h1>
            <div className='flex justify-around sm:py-5'>
              <h2 className='font-bold'>SubTotal</h2><h2>$ <span>{cartItem.reduce((acc,current) => acc + current.TotalPrice , 0).toFixed(2)}</span></h2>
            </div>
                <hr className='my-2 mx-16  ' />
            <div className='flex justify-around sm:py-5'>
              <h2 className='font-bold'>Shipping</h2>
              <h2 className='line'><span>$ 0</span></h2>
            </div>
            <hr className='my-2 mx-16 ' />
            <div className='flex justify-around sm:py-5'>
              <h1 className='font-bold' >Total </h1>
              <h2>$ <span>{cartItem.reduce((acc,current) => acc + current.TotalPrice , 0).toFixed(2)}</span></h2>
            </div>
            <button className=' w-full py-3 px-5 sm:text-sm text-lg sm:font-bold bg-blue-600 text-zinc-300 mt-4 hover:bg-blue-700 transition-all duration-300 '>CheckOut</button>
          </div>
        </div>

      <button onClick={() => navigate('/')} className='bg-zinc-100 rounded-full px-8 py-4 text-sm font-bold border border-gray-600 mt-10'>Continne Shopping</button>
    </div>
  )
}

export default Cart