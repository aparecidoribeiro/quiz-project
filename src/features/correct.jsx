import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const correctSlice = createSlice({
    name: 'correct',
    initialState,
    reducers: {
        certainQuestion: (state) => {
            state.value += 1
        }
    }
})

export const { certainQuestion } = correctSlice.actions;

export default correctSlice.reducer;