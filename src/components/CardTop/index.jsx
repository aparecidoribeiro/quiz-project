import './cardTop.scss'
import { useSelector } from 'react-redux';

const CardTop = () => {
    const dateLength = useSelector((state) => state.date.length)
    const counterQuestion = useSelector((state) => state.counter.value + 1)

    return (
        <div className='card-top'>
            {/* <ButtonOthers
                text={"Voltar"}
                to={'/'}
            /> */}
            <p>{counterQuestion}/{dateLength}</p>
        </div>
    )
}

export default CardTop
