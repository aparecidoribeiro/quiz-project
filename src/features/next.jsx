import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

const nextSlice = createSlice({
    name: 'next',
    initialState,
    reducers: {
        valueTrue: (state) => {
            state.value = true
        },
        valueFalse: (state) => {
            state.value = false
        }
    }
})

export const { valueTrue, valueFalse } = nextSlice.actions;

export default nextSlice.reducer;