import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Play"
}

const localSlice = createSlice({
    name: 'local',
    initialState,
    reducers: {
        telaPlay: (state) => {
            state.value = 'Play'
        },
        telaPlaying: (state) => {
            state.value = 'Playing'
        }
    }
})


export const { telaPlay, telaPlaying } = localSlice.actions;

export default localSlice.reducer;