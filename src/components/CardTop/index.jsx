import './cardTop.scss'
import { useSelector } from 'react-redux';
import ButtonReturn from '@/components/ButtonReturn';

const CardTop = () => {
    const dateLength = useSelector((state) => state.date.length)
    const counterQuestion = useSelector((state) => state.counter.value + 1)

    return (
        <div className='card-top'>
            <ButtonReturn />
            <p>{counterQuestion}/{dateLength}</p>
        </div>
    )
}

export default CardTop
