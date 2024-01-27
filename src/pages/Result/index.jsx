import './Result.scss'
import ButtonOthers from '@/components/ButtonOthers'

const Result = () => {
  const value = 10;
  return (
    <div className='result'>
      <h1>Total de <span>acertos</span></h1>
      <div>
        <span>{value}/{value}</span>
      </div>
      <ButtonOthers
        text={'jogar novamente'}
        to={'/'}
      />
    </div>
  )
}

export default Result
