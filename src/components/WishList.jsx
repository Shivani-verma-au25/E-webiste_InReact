import React from 'react';
import { useProductContext } from '../contect/ProductContext';
import WishCard from './WishCard';
import { useNavigate } from 'react-router-dom';

const WishList = () => {
  const navigate = useNavigate();
  const { wishListItems } = useProductContext();

  return (
    <div className='container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12'>
      {/* Heading */}
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center my-6'>
        Your Wishlist Items
      </h1>
      
      {/* Wishlist grid */}
      <div className='w-full bg-gray-50 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {wishListItems && wishListItems.length > 0 ? (
          wishListItems.map((item) => (
            <WishCard key={item.id} product={item} />
          ))
        ) : (
          <p className='col-span-full text-center text-gray-500'>
            No items in the wishlist.
          </p>
        )}
      </div>

      {/* Continue Shopping button */}
      <div className='flex justify-center mt-8'>
        <button 
          onClick={() => navigate('/')} 
          className='bg-zinc-100 hover:bg-gray-200 text-sm sm:text-base font-bold py-3 px-6 sm:px-8 sm:py-4 border border-gray-600 rounded-full transition'
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default WishList;
