// slice

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:{
    cart:[],

  },
  reducers: {
   addToCart: (state, action)=>{
    //if product is already in cart increase its cart increase its count or add item to cart
    const cartItem = state.cart.find((item)=>item.id === action.payload.id);
    if(cartItem){
      cartItem.quantity++;
    }
    else{
      state.cart.push({...action.payload, quantity: 1})
    }
   },


   removeItem: (state, action)=>{
    // remove object from array
    const removeItem = state.cart.filter((item) => item.id !== action.payload);
    state.cart = removeItem;
     },

     
   incrementItemQty: (state, action)=>{
    // increment qty of project
    const item = state.cart.find((item) => item.id === action.payload);
    item.quantity++;
    
   },
   decrementItemQty: (state, action)=>{
    // decrement qty of object
    const item = state.cart.find((item) => item.id === action.payload);
    if (item.quantity === 1) {
      item.quantity = 1
    } else {
      item.quantity--;
    }

    

   }

  }
})

export const {addToCart, removeItem, incrementItemQty, decrementItemQty} = cartSlice.actions

export default cartSlice.reducer;