import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCocktails: [],
}

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    addCocktail: (state, action) => {
      state.allCocktails = [...state.allCocktails, action.payload]
    },
  },
})

export const { addCocktail } = cocktailSlice.actions

export default cocktailSlice.reducer