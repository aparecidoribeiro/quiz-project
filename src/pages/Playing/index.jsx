import './Playing.scss'
import { useSelector } from 'react-redux'
import Questions from '../Questions'
import Result from '../Result'

const Playing = () => {
    const date = useSelector((state) => state.date);
    const counter = useSelector((state) => state.counter)
    const index = counter.value

    return (
        <div className='PlayingOne'>
            {index != date.length ? <Questions /> : <Result />}
        </div>
    )
}

export default Playing
