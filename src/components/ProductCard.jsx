import React from 'react'
import { useProductContext } from '../contect/ProductContext';
import { FaHeart } from "react-icons/fa";


function ProductCard({item}) {
  const {AddTocartITem,addWishToList,wishListItems} = useProductContext()
  // console.log(wishListItems,"from card");
    const isInWishList = wishListItems.findIndex(listitem => listitem.id === item.id) !== -1;
    

  
  // console.log(item.title);
  const addToCart = (getItem) => {
      AddTocartITem(getItem)
  }
  
  return (
    <div className=' bg-zinc-200 shadow-lg rounded-md overflow-hidden group'>
        <div className='h-[70%] sm:p-10 group-hover:scale-125 transition-transform duration-300 overflow-hidden '>
            <img className='w-full h-full object-cover ' src={item.thumbnail} alt="" />
        </div>
        {/* <div className='h-[30%] bg-red-500  text-zinc-500 grid grid-cols-2 gap-1 place-items-center sm:py-3 py-3 sm:px-4 px-3 '> */}
        <div className='h-[30%] flex justify-center items-center flex-col '>
            <h1 className='font-bold py-1 sm:px-1 '>{item.title}</h1>
            <span className='font-bold py-1'>${item.price}</span>
            <div className='w-full flex justify-around items-center mb-6 sm:py-5 py-4 md:mb-7 lg:mb-6 ' >
              <button onClick={() => addToCart(item)} className='bg-black rounded-md px-4 py-1 font-semibold sm:tex-xl text-xl text-white shadow-md ' >Cart</button>
              <button onClick={() => addWishToList(item)}   className={`${isInWishList ? 'text-red-600' : 'text-black'}  rounded-md px-4 py-2 font-semibold xl:font-medium sm:tex-xl text-xl shadow-md `} ><FaHeart /></button>
            </div>
        </div>

    </div>
  )
}

export default ProductCard