import './CardAlternativa.scss'
import { useDispatch } from 'react-redux'
import { valueTrue } from '@/features/next'
import { useState } from 'react'



const CardAlternativa = ({ text, option }) => {


  const dispatch = useDispatch()

  function actionBtn(e) {
    dispatch(valueTrue())

    addClass(e)
  }

  const [lock, setLock] = useState(true)


  function addClass(e) {

    if (lock === true) {
      if (e.target.innerText == option) {
        e.target.classList.add("correta")
        setLock(false)
      }
      else {
        e.target.classList.add("errado")
        setLock(false)
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
