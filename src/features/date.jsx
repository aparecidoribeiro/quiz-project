import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        pergunta: "A partir de 1889, a cidade passou a ser conhecida como 'Araripe'. Mas como era denominada até então?",
        altenativas: [
            'Chapada do Araripe',
            'Brejo Seco',
            'Riacho Grande',
            'Brejinho'
        ],
        correta: 'Brejo Seco'
    },
    {
        pergunta: "Em 1899, a vila de Araripe tem seu território anexado a outro município e se torna distrito de qual cidade?",
        altenativas: [
            'Campos Sales',
            'Salitre',
            'Alagoinha',
            'Pajeú'
        ],
        correta: 'Campos Sales'
    },
    {
        pergunta: "Qual o nome do evento junino que se destaca na cidade pela dança conhecida como quadrilha?",
        altenativas: [
            'Festa na Roça',
            'Quadrilha Junina Raiz',
            'Forró Junino',
            'Fequaripe'
        ],
        correta: 'Fequaripe'
    },
    {
        pergunta: "No mês de junho acontece um evento religioso chamado a 'festa do padroeiro' que ocorre em devoção a qual santo?",
        altenativas: [
            'Frei Damião',
            'São João',
            'Santo Antônio',
            'Santa Rita'
        ],
        correta: 'Santo Antônio'
    },
]

const dateSlice = createSlice({
    name: 'date',
    initialState
})

export default dateSlice.reducer;