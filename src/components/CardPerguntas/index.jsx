import './cardPerguntas.scss'


const CardPerguntas = ({ pergunta }) => {
    return (
        <div className='card-peguntas'>
            <h1>{pergunta}</h1>
        </div>
    )
}

export default CardPerguntas
