import React, {  } from 'react'
import { useProductContext } from '../contect/ProductContext'
import WishCard from './WishCard';
import { useNavigate } from 'react-router-dom';

function WishList() {
  const navigate = useNavigate()
  const {wishListItems,heartAdd} = useProductContext()
  console.log(wishListItems,"wish page" , "heart" , heartAdd);
  

  return (
    <div className='sm:px-10 sm:py-10 px-10 py-10 shadow-lg'>
        <h1 className='sm:text-3xl sm:px-5 sm:py-10 px-5 py-10 uppercase '>Your WishList Items</h1>
      <div className='w-full  bg-gray-50 sm:px-10 px-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 sm:py-5'>
        {
          wishListItems && wishListItems.length > 0
            ? wishListItems.map((item) => (
                <WishCard key={item.id} product={item} /> // Pass itemW as a prop
              ))
            : <p>No items in the wishlist.</p>
        }
      </div>
      
      <button onClick={() => navigate('/')} className='bg-zinc-100 rounded-full px-8 py-4 text-sm font-bold border border-gray-600 mt-10'>Continne Shopping</button>

    </div>
  )
}

export default WishList