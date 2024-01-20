import { Link } from 'react-router-dom'
import './ButtonPlay.scss'

const ButtonPlay = ({ text, icon }) => {
    return (
        <Link to={"/playing"} className='button'>
            <img src={icon} className='button-icon' />
            {text}
        </Link>
    )
}

export default ButtonPlay
