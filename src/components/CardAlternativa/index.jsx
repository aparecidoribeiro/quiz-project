import './CardAlternativa.scss'
import { useDispatch, useSelector } from 'react-redux'
import { valueTrue } from '@/features/next'
import { clickCorreto, clickErrado, valueTogle } from '@/features/click'

const CardAlternativa = ({ text, option }) => {
  const click = useSelector((state) => state.click.value)
  const dispatch = useDispatch()

  function actionBtn(e) {
    dispatch(valueTrue())
    addClass(e)
  }

  function addClass(e) {
    if (click == true) {
      if (option == e.target.innerText) {
        dispatch(clickCorreto(e.target))
        dispatch(valueTogle(false))
      } else {
        dispatch(clickErrado(e.target))
        dispatch(valueTogle(false))
      }
    }
  }

  return (
    <button className='card-alt' onClick={actionBtn}>
      {text}
    </button>
  )
}

export default CardAlternativa
