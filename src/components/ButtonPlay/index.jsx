import './ButtonPlay.scss'
import { useDispatch, useSelector } from 'react-redux'
import { questionsReorder } from '@/features/questions'
import { telaPlaying } from '@/features/local'

const ButtonPlay = ({ text, icon }) => {

    const dispatch = useDispatch()
    const date = useSelector((state) => state.date)
    const questions = [...date]

    function actionReodenar() {
        for (var i = questions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
    }

    const actionBtn = () => {
        actionReodenar()
        dispatch(telaPlaying())
        dispatch(questionsReorder(questions))
    }

    return (
        <button className='button' onClick={actionBtn}>
            <img src={icon} className='button-icon' />
            Play
        </button>
    )
}

export default ButtonPlay
