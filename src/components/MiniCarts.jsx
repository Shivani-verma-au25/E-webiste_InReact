import React from 'react'
import { useProductContext } from '../contect/ProductContext'

function MiniCarts({item}) {
  const {removeProductFromCart ,AddTocartITem} = useProductContext()

  return (
    // <div className='w-full bg-green-900 flex justify-around '> mini cart
    <div className='w-full grid sm:grid-cols-12 place-items-center bg-zinc-200 gap-4 mb-3 rounded-md shadow-lg' >
        <div className='max-w-sm w-[25%] bg-zinc-100 rounded-md shadow-lg mx-2 my-2 sm:col-span-5 place-self-start'>
            <img className='w-full h-full object-cover' src={item.thumbnail} alt="" /></div>
        <div className=' sm:col-span-3 '>
            <button onClick={() => removeProductFromCart(item,false)} disabled={item?.quantity === 1} className='disabled:opacity-25 sm:text-3xl sm:py-2 sm:px-3 shadow-md rounded-lg bg-zinc-200 border border-gray-800'>-</button>
            <span className='sm:text-2xl px-5'>{item.quantity}</span>
            <button onClick={() => AddTocartITem(item,false)}  className='sm:text-3xl sm:py-2 sm:px-3 shadow-md rounded-lg bg-zinc-200 border border-gray-800'>+</button>
        </div>
        <div className=" col-span-2 "><p>$ {item?.TotalPrice}</p></div>
        <button onClick={()=> removeProductFromCart(item,true)} className='col-span-2 rounded-lg  px-5 py-2  text-white bg-black hover:bg-zinc-950'>Remove</button>
    </div>
  )
}

export default MiniCarts