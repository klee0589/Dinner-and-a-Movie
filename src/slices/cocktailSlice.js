import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cocktails: [],
}

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    addCocktail: (state, action) => {
      state.cocktails.push(action.payload)
    },
  },
})

export const { addCocktail } = cocktailSlice.actions

export default cocktailSlice.reducer