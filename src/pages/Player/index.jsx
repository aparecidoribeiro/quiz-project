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

  return (
    <div className='player'>
      <div className='player-config'>
        <div className='button-config'>
          <input type="checkbox" id='volume' onChange={actionMusic} />
          <label className='button-volume' htmlFor="volume">
            <img src={volumeOff} className='img-volume' />
          </label>
        </div>
        <button type='submit' className='button-config'>
          <img src={infor} />
        </button>
      </div>
      <div className='player-sobre'>
        <h1>Você sabe?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>
      <ButtonPlay
        text={"Play"}
        icon={play}
        size={"1.4rem"}
        onClick={actionPlay}
      />
    </div>
  )
}

export default Player
