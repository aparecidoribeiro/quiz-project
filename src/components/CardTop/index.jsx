import './cardTop.scss'
import ButtonOthers from '@/components/ButtonOthers'

const CardTop = ({ result }) => {
    const value = 10;
    return (
        <div className='card-top'>
            {/* <ButtonOthers
                text={"Voltar"}
                to={'/'}
            /> */}
            <p>{value}/{value}</p>
        </div>
    )
}

export default CardTop
