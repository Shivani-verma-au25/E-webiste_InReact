import React from 'react'
import { useProductContext } from '../contect/ProductContext'

function MiniCarts({item}) {
  const {removeProductFromCart ,AddTocartITem} = useProductContext()

  return (
    // <div className='w-full bg-green-900 flex justify-around '> mini cart
    <div key={item?.id} className='w-full sm:w-[150%] md:w-[150%] lg:w-[100%] grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-12  place-items-center bg-zinc-200 gap-4 mb-3 rounded-md shadow-lg' >
        <div className='max-w-sm sm:w-[50%] lg:w-full w-full bg-zinc-100 rounded-md shadow-lg mx-1 my-2  sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 place-self-start'>
            <img className='w-full h-full object-cover' src={item.thumbnail} alt="" />
        </div>
        <div className='col-span-1  flex justify-center items-center  sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-6 ml-2 '>
            <button onClick={() => removeProductFromCart(item,false)} disabled={item?.quantity === 1} className='disabled:opacity-25 sm:text-3xl sm:py-2 sm:px-3 md:px-3 md:py-1 px-2 text-xl py-1 shadow-md rounded-lg bg-zinc-200 border border-gray-800'>-</button>
            <span className='sm:text-2xl sm:px-5 px-1 lg:px-4 '>{item.quantity}</span>
            <button onClick={() => AddTocartITem(item,false)}  className='sm:text-3xl sm:py-2 sm:px-3 md:px-3 md:py-1 px-2 text-xl py-1 shadow-md rounded-lg bg-zinc-200 border border-gray-800'>+</button>
        </div>
        <div className=" sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2  text-sm"><p>$ {item?.TotalPrice}</p></div>
        <button onClick={()=> removeProductFromCart(item,true)} className='sm:col-span-1 md:col-span-0 rounded-lg  px-2 text-sm py-2 mr-3  text-white bg-black hover:bg-zinc-950'>Remove</button>
    </div>
  )
}

export default MiniCarts