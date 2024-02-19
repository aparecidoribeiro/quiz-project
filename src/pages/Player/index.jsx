import './player.scss'
import ButtonPlay from '@/components/ButtonPlay'
import play from '@/icons/play.svg'
import infor from '@/icons/info.svg'
import volume from '@/icons/volume.svg'
import volumeOff from '@/icons/volume-off.svg'
import { useDispatch } from 'react-redux'
import { zeroQuestion } from '@/features/counter'
import imgHeader from '@public/header.png'
import sound from '/src/sons/luna.mp3'

const Player = () => {

  const music = new Audio(sound)
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
          <p>Com intuito de regastar a memória histórica e cultural da cidade de Araripe, foi desenvolvido o jogo "Você Sabe?", 
            afim compartilhar todas essas informações de uma forma atrativa e divertida. Sinta-se a vontade para aprender enquanto se diverte.</p>
          <button onClick={modalNone}>Voltar</button>
        </div>
      </div>
      <div className='player-sobre'>
        <h1>Você sabe?</h1>
        <p>Esse é um jogo cultural sobre a cidade de Araripe-Ce. Aproveite para aprender enquanto se diverte e assim conhecer um pouco da história dessa bela cidade.</p>
      </div>
      <ButtonPlay
        icon={play}
        size={"1.4rem"}
        onClick={actionPlay}
      />
      <div className='logo'>
        <img src={imgHeader} />
      </div>
    </div>
  )
}

export default Player
