import { createBrowserRouter } from "react-router-dom"
import Player from "@/pages/Player"
import Playing from "@/pages/Playing"
import Result from "@/pages/Result"
import PlayingOne from "@/pages/PlayingOne"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Player />
    },
    {
        path: "/playing",
        element: <PlayingOne />
    }
])