import './PlayingOne.scss'
import { useSelector } from 'react-redux'
import Playing from '../Playing'
import Result from '../Result'

const PlayingOne = () => {
    const nextValue = useSelector((state) => state.next)
    const date = useSelector((state) => state.date);
    const counter = useSelector((state) => state.counter)
    const index = counter.value

    return (
        <div className='PlayingOne'>
            {index != date.length ? <Playing /> : <Result />}
        </div>
    )
}

export default PlayingOne
