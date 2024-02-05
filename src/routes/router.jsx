import { createBrowserRouter } from "react-router-dom"
import PlayingTwo from "@/pages/PlayingTwo"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PlayingTwo />
    }
])