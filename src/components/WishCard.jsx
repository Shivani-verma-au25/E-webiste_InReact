import React from 'react'

function WishCard({product ,key}) {
  return (
    // <div key={key} className='sm:w-[100%] sm:h-[100%] rounded-md bg-pink-300 ' >
    <div key={key} className='rounded-md bg-zinc-100 shadow-lg ' >
      <div className='sm:w-full sm:h-[60%] '>
        <img className='w-full h-full object-cover' src={product?.thumbnail} alt={product?.title} />
      </div>
        <div className='sm:w-full sm:h-[40%] bg-zinc-700 text-zinc-100 flex justify-center items-start flex-col px-4 shadow-lg'>
          <h3 className='sm:text-lg text-md text-slate-200 font-semibold tracking-tight sm:py-1 sm:px-3 px-1 py-3 md:px-1 leading-none md:text-sm md:py-2 lg:tracking-tighter lg:leading-0 lg:text-md ' >{product?.title}</h3>
          <h4 className='sm:text-lg text-md text-slate-200 font-semibold tracking-tight sm:py-1 sm:px-3 px-1 py-3  md:text-sm md:py-0' >$ <span className='font-bold'>{product?.price}</span></h4>
          <p className=' inline sm:py-1 sm:px-4 px-3 text-md sm:text-lg font-semibold text-zinc-100  rounded-xl sm:my-2 md:mb-3 md:text-xs my-2 lg:text-xs'>{product?.rating} <span></span></p>
        </div>
    </div>
  )
}

export default WishCard