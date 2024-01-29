import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
    element: ""
}

const clickSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        clickCorreto: (state, { payload }) => {
            state.element = payload
            state.element.classList.add('correto')
        },
        clickErrado: (state, { payload }) => {
            state.element = payload
            state.element.classList.add('errado')
        },
        removeClass: (state) => {
            state.element.classList.remove('errado')
            state.element.classList.remove('correto')
        },
        valueTogle: (state, {payload}) => {
            state.value = payload
        },
    }
})


export const { clickCorreto, clickErrado, removeClass, valueTogle } = clickSlice.actions;

export default clickSlice.reducer;