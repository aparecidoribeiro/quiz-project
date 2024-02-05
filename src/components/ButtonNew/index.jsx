import './ButtonNew.scss'


const ButtonNew = () => {

    const actionNew = () => {
        window.location.replace('/')
    }

    return (
        <button className='button-new' onClick={actionNew}>
            Jogar Novamente
        </button>
    )
}

export default ButtonNew
