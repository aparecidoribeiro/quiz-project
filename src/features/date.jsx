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
        pergunta: "No mês de junho acontece um evento religioso chamado de 'festa do padroeiro' que ocorre em devoção a qual santo?",
        altenativas: [
            'Frei Damião',
            'São João',
            'Santo Antônio',
            'Santa Rita'
        ],
        correta: 'Santo Antônio'
    },
    {
        pergunta: "Outro evento que faz parte da cultura araripense, é a festa do minicípio que acontece entre 1 a 3 de agosto em prol do(a)?",
        altenativas: [
            'Aniversário da Cidade',
            'Missa do Vaqueiro',
            'Campeonato de Futebol',
            'Dia do Estudante'
        ],
        correta: 'Aniversário da Cidade'
    },
    {
        pergunta: "Qual é o ano de fundação da cidade de Araripe, no Ceará?",
        altenativas: [
            '1850',
            '1877',
            '1905',
            '1922'
        ],
        correta: '1877'
    },
    {
        pergunta: "Araripe é um dos lugares de maior veneração ao Frei Damião, prova disso é o local que abriga uma capela e o santuário com a estátua do milagreiro. Qual local é esse?",
        altenativas: [
            'Igreja Matriz',
            'Raspadeira de Mandioca',
            'Cruz do Monte',
            'Correto Municipal'
        ],
        correta: 'Cruz do Monte'
    },
    {
        pergunta: "Em qual local da cidade é responsavél por resguardada as memórias e relíquias araripense?",
        altenativas: [
            'Biblioteca Municipal',
            'Secretaria de Cultura',
            'Secretaria de Educação',
            'Espaço cultural Casa de Pitia'
        ],
        correta: 'Espaço cultural Casa de Pitia'
    },
    {
        pergunta: "Araripe possuí um parque natural no qual é frequentado por turistas e adimirado pelas suas cavernas, qual distrito faz esse marco na cultura na cidade?",
        altenativas: [
            'Brejinho',
            'Riacho Grande',
            'Pajeú',
            'Alagoinha'
        ],
        correta: 'Brejinho'
    },
    {
        pergunta: "Quais cidades cearenses fazem fronteira com o município de Araripe?",
        altenativas: [
            'Salitre, Potengi, Campo Sales',
            'Santana do Cariri, Potengi, Campo Sales',
            'Salitre, Potengi, Santana do Cariri',
            'Assaré, Potengi, Campo Sales'
        ],
        correta: 'Salitre, Potengi, Santana do Cariri'
    }
]

const dateSlice = createSlice({
    name: 'date',
    initialState
})

export default dateSlice.reducer;