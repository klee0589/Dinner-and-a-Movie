import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentCocktail: null,
}

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    addCocktail: (state, action) => {
      state.currentCocktail = action.payload
    },
  },
})

export const { addCocktail } = cocktailSlice.actions

export default cocktailSlice.reducer