import './player.scss'
import Button from '@/components/Button'
import Play from '@/icons/play.svg'

const Player = () => {
  return (
    <div className='player'>
      {/* <div className='player-config'>
        <button type='submit' className='button-som'></button>
        <button className='button-infor'></button>
      </div> */}
      <div className='player-sobre'>
        <h1>Você sabe?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>
      <Button
        text={"Play"}
        icon={Play}
        size={"1.4rem"}
      />
    </div>
  )
}

export default Player
