import { createBrowserRouter } from "react-router-dom"
import Player from "@/pages/Player"
import Playing from "@/pages/Playing"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Player />
    },
    {
        path: "/playing",
        element: <Playing />
    }
])