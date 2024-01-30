import './Result.scss'
import { useSelector } from 'react-redux';
import ButtonNew from '@/components/ButtonNew';

const Result = () => {

  const date = useSelector((state) => state.date.length)
  const correct = useSelector((state) => state.counter.value)

  return (
    <div className='result'>
      <h1>Total de <span>acertos</span></h1>
      <div>
        <span>{correct}/{date}</span>
      </div>
      <ButtonNew />
    </div>
  )
}

export default Result
