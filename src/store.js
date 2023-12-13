import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from './slices/cocktailSlice.ts';

export const store = configureStore({
  reducer: {
    cocktailReducer
  },
})