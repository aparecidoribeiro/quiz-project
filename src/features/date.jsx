import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        pergunta: "Qual sua idade?",
        altenativas: [12, 13, 14, 15],
        correta: 12
    },
    {
        pergunta: "Que ano estamos?",
        altenativas: [2000, 2012, 2022, 2024],
        correta: 2024
    },
]

const dateSlice = createSlice({
    name: 'date',
    initialState
})

export default dateSlice.reducer;