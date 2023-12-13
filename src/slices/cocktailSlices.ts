import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState  } from '../store'

// Define a type for the slice state
interface CocktailsState {
  cocktails: string[];
}

// Define the initial state using that type
const initialState: CocktailsState = {
  cocktails: [],
}

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    addCocktail: (state, action: PayloadAction<string>) => {
      state.cocktails.push(action.payload)
    },
  },
})

export const { addCocktail } = cocktailSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.cocktails

export default cocktailSlice.reducer