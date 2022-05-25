
import { configureStore } from '@reduxjs/toolkit';
import notes from './notesSlice';
import cart from './cartSlice' 

export const store = configureStore({
  reducer: {
     notes, 
     cart,
  },
})