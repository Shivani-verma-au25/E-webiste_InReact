import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import  Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import WishList from './components/WishList'
import toast, { Toaster } from 'react-hot-toast';
import Footer from './components/Footer'
import  Error from './components/Error'


function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  )
}

export default App