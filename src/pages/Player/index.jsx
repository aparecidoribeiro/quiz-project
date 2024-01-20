import './player.scss'
import Button from '@/components/Button'
import play from '@/icons/play.svg'
import infor from '@/icons/info.svg'
import volume from '@/icons/volume.svg'

const Player = () => {
  return (
    <div className='player'>
      <div className='player-config'>
        <button className='button-config' onClick={(e) => {
          console.log(e)
        }}>
          <img src={volume} />
        </button>
        <button type='submit' className='button-config'>
          <img src={infor} />
        </button>
      </div>
      <div className='player-sobre'>
        <h1>Você sabe?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>
      <Button
        text={"Play"}
        icon={play}
        size={"1.4rem"}
      />
    </div>
  )
}

export default Player
