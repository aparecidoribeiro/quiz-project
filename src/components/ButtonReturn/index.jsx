import './ButtonReturn.scss'

const ButtonReturn = () => {

    const modalFlex = () => {
        const modal = document.querySelector('.modal')

        modal.style.display = 'flex'
    }

    return (
        <button className='button-return' onClick={modalFlex}>
            Voltar
        </button>
    )
}

export default ButtonReturn
