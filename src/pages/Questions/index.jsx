import './Questions.scss'
import CardTop from '@/components/CardTop'
import CardPerguntas from '@/components/CardPerguntas'
import CardAlternativa from '@/components/CardAlternativa'
import ButtonOthers from '@/components/ButtonOthers'
import { useSelector } from 'react-redux'

const Questions = () => {
    const nextValue = useSelector((state) => state.next)
    const date = useSelector((state) => state.date);
    const counter = useSelector((state) => state.counter)
    const index = counter.value

    return (
        <div className='playing'>
            <CardTop />
            {index != date.length && <CardPerguntas
                pergunta={date[index].pergunta}
            />}
            {index != date.length && <div className='playing-alt'>
                {date[index].altenativas.map((e, i) => {
                    return (
                        <CardAlternativa
                            text={e}
                            option={date[index].correta}
                            key={i}
                        />
                    )
                })}
            </div>}
            {nextValue.value && <ButtonOthers />}
        </div>
    )
}

export default Questions
