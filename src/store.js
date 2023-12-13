import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from './slices/cocktailSlice';

export const store = configureStore({
  reducer: {
    cocktailReducer
  },
})