import { createSlice } from '@reduxjs/toolkit';

import toast from 'react-hot-toast';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
       const timeId = new Date().getTime();
      state.cartItems.push({
        id: timeId,
        noteId: action.payload.note.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * action.payload.note.price,
       
      })

      toast.success('Товар добавлен в корзину', {
        duration: 3000,
        position: 'bottom-left',
      });

    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
        
      );

      toast.error('Товар удалён из корзины', {
        duration: 3000,
        position: 'bottom-left',
      });
    },

   
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total;
  }, 0);
};

export const getTotalArticles = state => {
  return state.cart.cartItems.length 
};

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;