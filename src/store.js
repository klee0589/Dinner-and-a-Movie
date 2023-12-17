import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from './slices/cocktailSlice';
import mealReducer from './slices/mealSlice';
import movieReducer from './slices/movieSlice';

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
    meal: mealReducer,
    movie: movieReducer
  },
})