import './ButtonNew.scss'
import { useDispatch } from 'react-redux'
import { zeroQuestion } from '@/features/counter'

const ButtonNew = () => {
    const dispatch = useDispatch()
    const actionNew = () => {
        dispatch(zeroQuestion())
        window.location.replace("/")
    }

    return (
        <button className='button-new' onClick={actionNew}>
            Jogar Novamente
        </button>
    )
}

export default ButtonNew
