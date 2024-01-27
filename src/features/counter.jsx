import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        nextQuestion: (state) => {
            state.value += 1
        }
    }
})

export const {nextQuestion} = counterSlice.actions;

export default counterSlice.reducer;