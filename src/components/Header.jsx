import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";


function Header() {
  return (
    <div className='bg-zinc-900 text-zinc-100 max-w-screen-2xl grid sm:grid-cols-12 grid-cols-2 '>
       <div className='col-span-2 flex  justify-center items-center'>
        logog
       </div>
        <ul className='sm:col-span-9  flex justify-center items-center gap-5 sm:text-xl font-semibold py-6'>
            <Link to={'/'} >Home</Link>
            <Link to={'/about'} >About</Link>
            <Link to={'/contact'} >Contact</Link>
        </ul>
        <div className='sm:col-span-1  flex justify-around items-center'>
            <Link to={'/cart'}>Cart</Link>
            <Link to={'/wishlist'} ><FaHeart /></Link>
        </div>
    </div>
  )
}

export default Header