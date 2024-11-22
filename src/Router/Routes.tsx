import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import TeamPage from '../Pages/TeamPage/TeamPage'

type Props = {}

export const router = createBrowserRouter([
    {path: "/",element:<HomePage/>},
    {path:"/team",element:<TeamPage/>}
])

