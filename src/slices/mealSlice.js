import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMeal: null,
}

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        addMeal: (state, action) => {
            state.currentMeal = action.payload
        },
    },
})

export const { addMeal } = mealSlice.actions

export default mealSlice.reducer