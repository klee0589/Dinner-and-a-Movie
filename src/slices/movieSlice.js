import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMovie: null,
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.currentMovie = action.payload
        },
    },
})

export const { addMovie } = movieSlice.actions

export default movieSlice.reducer