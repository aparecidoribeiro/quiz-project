import './Questions.scss'
import CardTop from '@/components/CardTop'
import CardPerguntas from '@/components/CardPerguntas'
import CardAlternativa from '@/components/CardAlternativa'
import ButtonOthers from '@/components/ButtonOthers'
import { useSelector } from 'react-redux'

const Questions = () => {
    const nextValue = useSelector((state) => state.next)
    const date = useSelector((state) => state.date);
    const question = useSelector((state) => state.questions);
    const counter = useSelector((state) => state.counter)
    const index = counter.value
    const value = question[0]

    return (
        <div className='playing'>
            <CardTop />
            {index != date.length && <CardPerguntas
                pergunta={value[index].pergunta}
            />}
            {index != date.length && <div className='playing-alt'>
                {value[index].altenativas.map((e, i) => {
                    return (
                        <CardAlternativa
                            text={e}
                            option={value[index].correta}
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
