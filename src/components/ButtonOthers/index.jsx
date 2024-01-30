import './ButtonOthers.scss'
import { useDispatch } from 'react-redux'
import { valueFalse } from '@/features/next'
import { nextQuestion } from '@/features/counter'
import { removeClass, valueTogle } from '@/features/click'
import { } from 'react'

const ButtonOthers = ({ text, to }) => {
    const dispatch = useDispatch()

    function actionBtn() {
        dispatch(valueFalse())
        dispatch(nextQuestion())
        dispatch(removeClass())
        dispatch(valueTogle(true))
    }

    return (
        <button
            to={to}
            className='button-othes'
            onClick={actionBtn}
        >
            {text}
        </button>
    )
}

export default ButtonOthers
