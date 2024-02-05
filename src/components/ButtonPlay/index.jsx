import './ButtonPlay.scss'
import { useDispatch, useSelector } from 'react-redux'
import { telaPlaying } from '@/features/local'

const ButtonPlay = ({ text, icon }) => {

    const dispatch = useDispatch()

    const actionBtn = () => {
        dispatch(telaPlaying())
    }

    return (
        <button className='button' onClick={actionBtn}>
            <img src={icon} className='button-icon' />
            {text}
        </button>
    )
}

export default ButtonPlay
