import Player from "@/pages/Player"
import Playing from "@/pages/Playing"
import { useSelector } from "react-redux"

const PlayingTwo = () => {

    const local = useSelector((state) => state.local.value)

    return (
        <>
            {local == 'Play' ? <Player /> : <Playing />}
        </>
    )
}

export default PlayingTwo
