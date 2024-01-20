import { Link } from 'react-router-dom'
import './button.scss'

const Button = ({ text, icon }) => {
    return (
        <Link to={"/playing"} className='button'>
            <img src={icon} className='button-icon' />
            {text}
        </Link>
    )
}

export default Button
