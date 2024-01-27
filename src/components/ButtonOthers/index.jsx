import './ButtonOthers.scss'
import { useSelector, useDispatch } from 'react-redux'
import { valueFalse } from '@/features/next'
import { nextQuestion } from '@/features/counter'


const ButtonOthers = ({ text, to }) => {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    function actionBtn() {
        dispatch(valueFalse())
        dispatch(nextQuestion())
    }

    return (
        <button to={to} className='button-othes' onClick={actionBtn} >
            {text}
        </button>
    )
}

export default ButtonOthers
