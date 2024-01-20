import { Link } from 'react-router-dom'
import './ButtonOthers.scss'


const ButtonOthers = ({ text, to }) => {
    return (
        <Link to={to} className='button-othes'>
            {text}
        </Link>
    )
}

export default ButtonOthers
