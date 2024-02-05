import './player.scss'
import ButtonPlay from '@/components/ButtonPlay'
import play from '@/icons/play.svg'
import infor from '@/icons/info.svg'
import volume from '@/icons/volume.svg'
import volumeOff from '@/icons/volume-off.svg'
import { useDispatch } from 'react-redux'
import { zeroQuestion } from '@/features/counter'
import { useState } from 'react'

const Player = () => {

  const music = new Audio('/src/sons/play.mp3')
  const [som, setSom] = useState(true)
  const dispatch = useDispatch()

  const actionPlay = (e) => {
    dispatch(zeroQuestion())
    dispatch(telaPlaying())
  }

  const actionVolume = (e) => {
    const imgBtn = document.querySelector('.button-volume')

    if (som === true) {
      setSom(false)
      imgBtn.setAttribute('src', volumeOff)
      console.log('som desligado')
    } else if (som === false) {
      setSom(true)
      imgBtn.setAttribute('src', volume)
      console.log('som ligado')
    }
  }

  return (
    <div className='player'>
      <div className='player-config'>
        <button className='button-config' onClick={actionVolume}>
          <img className='button-volume' src={volume} />
        </button>
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
