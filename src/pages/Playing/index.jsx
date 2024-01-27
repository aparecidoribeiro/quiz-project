import './playing.scss'
import CardTop from '@/components/CardTop'
import CardPerguntas from '@/components/CardPerguntas'
import CardAlternativa from '@/components/CardAlternativa'
import ButtonOthers from '@/components/ButtonOthers'
import { useSelector } from 'react-redux'

const Playing = () => {
    const nextValue = useSelector((state) => state.next)
    const date = useSelector((state) => state.date);
    const counter = useSelector((state) => state.counter)
    const index = counter.value

    return (
        <div className='playing'>
            <CardTop />
            <CardPerguntas
                pergunta={date[index].pergunta}
            />
            <div className='playing-alt'>
                {date[index].altenativas.map((e, i) => {
                    return (
                        <CardAlternativa
                            text={e}
                            option={date[index].correta}
                            key={i}
                        />
                    )
                })}
            </div>
            {nextValue.value && <ButtonOthers
                text={"Continuar"}
                to={'/'}
            />}
        </div>
    )
}

export default Playing
