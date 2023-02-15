import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Component/HomePage'
import Product from './Component/Product'
import ShippingCart from './Component/ShoppingCart'
import NotFountPage from './Component/NotFountPage'
import ProductData from './Component/ProductData'
import LogIn from './Component/LogIn'
import CheckOut from './Component/CheckOut'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/ShippingCart' element={<ShippingCart/>}/>
        <Route path='*' element={<NotFountPage/>}/>
        <Route path='/:id' element={<ProductData/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/CheckOut' element={<CheckOut/>}/>

      </Routes>
      </BrowserRouter>      
      
      
    </div>
  )
}

export default App
