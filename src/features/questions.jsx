import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        questionsReorder: (state, { payload }) => {
            state.push(payload)
        }
    }
});

export const { questionsReorder } = questionsSlice.actions;;

export default questionsSlice.reducer;