import React from 'react'
import { useProductContext } from '../contect/ProductContext'
import MiniCarts from './MiniCarts';
import { useNavigate } from 'react-router-dom';


function Cart() {
  const {cartItem} = useProductContext()
  // console.log(cartItem,"cart");
  const navigate = useNavigate()
  
  
  return (
    <div className='isolate w-full container mx-auto sm:px-10 sm:py-10 bg-gray-300'>
      {/*  */}
      <div
        className="mt-90 absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1125/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
        {/*  */}
        <h1 className='sm:text-3xl sm:py-10 '>Shopping Cart</h1>
        <div className='w-full  flex gap-10 flex-col sm:flex-col md:flex-col md:items-start lg:flex-row xl:flex-row   '>
          <div className='w-w[70%] px-6 py-5 sm:w-[70%] '>
            <div className='flex sm:flex sm:justify-between sm:px-10 sm:py-4 py-5'>
              <h1 className='sm:text-xl sm:font-semibold text-lg font-semibold'>Product</h1>
              <h1 className='sm:text-xl sm:font-semibold text-lg font-semibold'>Quantity</h1>
              <h1 className='sm:text-xl sm:font-semibold text-lg font-semibold'>Total Price</h1>
            </div>
            {cartItem && cartItem?.length> 0 ? cartItem.map((item) =>  <MiniCarts  item={item} />) : 'No Data'}
          </div>
          <div className='w-[90%] md:w-[50%] lg:w-[30%] text-zinc-200 h-full bg-[#202731] ms:mt-16 mt-10 ml-4 '>
            <h1 className='sm:text-2xl sm:px-16 sm:py-3 text-2xl md:text-3xl px-2 py-3'>Summary</h1>
            <div className='flex justify-around sm:py-5'>
              <h2 className='font-bold text-sm sm:text-sm md:text-lg'>SubTotal</h2><h2>$ <span>{cartItem.reduce((acc,current) => acc + current.TotalPrice , 0).toFixed(2)}</span></h2>
            </div>
                <hr className='sm:my-2 sm:mx-16 my-2 mx-5 ' />
            <div className='flex justify-around sm:py-5'>
              <h2 className='font-bold text-sm sm:text-sm md:text-lg'>Shipping</h2>
              <h2 className='line'><span>$ 0</span></h2>
            </div>
            <hr className='sm:my-2 sm:mx-16 my-2 mx-5 ' />
            <div className='flex justify-around sm:py-5'>
              <h1 className='font-bold text-sm sm:text-sm md:text-lg' >Total </h1>
              <h2>$ <span>{cartItem.reduce((acc,current) => acc + current.TotalPrice , 0).toFixed(2)}</span></h2>
            </div>
            <button className=' w-full py-3 px-5 sm:text-sm text-lg sm:font-bold bg-blue-600 text-zinc-300 mt-4 hover:bg-blue-700 transition-all duration-300 '>CheckOut</button>
          </div>
        </div>

      <button onClick={() => navigate('/')} className='bg-zinc-100 rounded-full px-5 py-3 mb-10 ml-5 text:xs  sm:text-sm md:text-sm sm:px-8 sm:py-4  font-bold border border-gray-600 mt-10'>Continne Shopping</button>
    </div>
  )
}

export default Cart