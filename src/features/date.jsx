import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        pergunta: "Qual minha idade?",
        altenativas: [12, 13, 18, 15],
        correta: 18
    },
    {
        pergunta: "Que ano estamos?",
        altenativas: [2000, 2012, 2022, 2024],
        correta: 2024
    },
    {
        pergunta: "Em que ano nasci?",
        altenativas: [2005, 2012, 2022, 2024],
        correta: 2005
    },
]

const dateSlice = createSlice({
    name: 'date',
    initialState
})

export default dateSlice.reducer;