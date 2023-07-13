import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Product from './Components/Products'
const App = () => {
  return (
  <div className='font-serif'>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    <Footer />
  </div>
  )
}

export default App