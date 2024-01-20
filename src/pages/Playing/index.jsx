import './playing.scss'
import CardTop from '@/components/CardTop'
import CardPerguntas from '@/components/CardPerguntas'
import CardAlternativa from '@/components/CardAlternativa'
import ButtonOthers from '@/components/ButtonOthers'

const Playing = () => {
    return (
        <div className='playing'>
            <CardTop />
            <CardPerguntas />
            <div className='playing-alt'>
                <CardAlternativa />
                <CardAlternativa />
                <CardAlternativa />
                <CardAlternativa />
            </div>
            <ButtonOthers
                text={"Continuar"}
                to={'/'}
            />
        </div>
    )
}

export default Playing
