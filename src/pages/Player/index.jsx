import './player.scss'
import ButtonPlay from '@/components/ButtonPlay'
import play from '@/icons/play.svg'
import infor from '@/icons/info.svg'
import volume from '@/icons/volume.svg'
import volumeOff from '@/icons/volume-off.svg'
import { useDispatch } from 'react-redux'
import { zeroQuestion } from '@/features/counter'

const Player = () => {

  const music = new Audio('/src/sons/play.mp3')
  music.loop = true
  const dispatch = useDispatch()

  const actionPlay = () => {
    dispatch(zeroQuestion())
    dispatch(telaPlaying())
  }


  const actionMusic = () => {
    const imgBtn = document.querySelector('.img-volume')
    const btnVolume = document.querySelector('#volume')

    if (btnVolume.checked) {
      imgBtn.setAttribute('src', volume)
      music.play()
    } else {
      imgBtn.setAttribute('src', volumeOff)
      music.pause()
    }

  }

  const actionModal = () => {
    const modal = document.querySelector('.modal-infor')
    modal.style.display = "flex"

  }


  const modalNone = () => {
    const modal = document.querySelector('.modal-infor')
    modal.style.display = "none"
  }

  return (
    <div className='player'>
      <div className='player-config'>
        <div className='button-config'>
          <input type="checkbox" id='volume' onChange={actionMusic} />
          <label className='button-volume' htmlFor="volume">
            <img src={volumeOff} className='img-volume' />
          </label>
        </div>
        <button type='submit' className='button-config' onClick={actionModal}>
          <img src={infor} />
        </button>
      </div>
      <div className='modal-infor'>
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
          <button onClick={modalNone}>Voltar</button>
        </div>
      </div>
      <div className='player-sobre'>
        <h1>Você sabe?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>
      <ButtonPlay
        icon={play}
        size={"1.4rem"}
        onClick={actionPlay}
      />
    </div>
  )
}

export default Player
