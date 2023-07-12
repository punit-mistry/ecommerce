import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Navbar from './Pages/Navbar'
const App = () => {
  return (
  <>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
  </>
  )
}

export default App