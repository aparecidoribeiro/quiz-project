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
            console.log(state.value)
        },
        zeroQuestion: (state) => {
            state.value = 0
        }
    }
})

export const { nextQuestion, zeroQuestion } = counterSlice.actions;

export default counterSlice.reducer;