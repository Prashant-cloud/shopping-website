import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './NavBar.css'




const NavBar = () => {

  // const cart = useSelector((store)=> store.cart)

  // const getTotalQuantity = () =>{
  //   let total = 0;
  //   cart.forEach(item =>{
  //     total += item.getTotalQuantity
  //   })
  //   return total

  // }



  return (
    <div>
      <div className='navbar'>
      <div className='logo'>
        <Link to= '/' >HomePage</Link>
        </div>
      <div className='menu'>
        <div className='product'>
        <Link to= '/Product'>Product</Link>
        </div>

        <div className='cart'>
        <Link to= '/ShippingCart'>Cart</Link> 
        </div>

        <div className='login'>
          <Link to= '/LogIn'>Login</Link>
        </div>
        
    </div>
      </div>
      
      

  

    </div>
  )
}

export default NavBar
