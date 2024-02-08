import './Modal.scss'
import { useDispatch } from 'react-redux'
import { telaPlay } from '@/features/local'
import { zeroQuestion } from '@/features/counter'
import { valueFalse } from '@/features/next'

const Modal = () => {

    const dispatch = useDispatch()

    const modalNone = () => {
        const modal = document.querySelector('.modal')
        modal.style.display = 'none'
    }

    const actionReturn = () => {
        const modal = document.querySelector('.modal')
        modal.style.display = 'none'
        dispatch(telaPlay())
        dispatch(zeroQuestion())
        dispatch(valueFalse())
    }

    return (
        <div className='modal'>
            <div>
                <p>Deseja retorna ao inicio?</p>
                <div className='actions-modal'>
                    <button className='btn-sim' onClick={actionReturn}>Sim</button>
                    <button className='btn-nao' onClick={modalNone}>Não</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
