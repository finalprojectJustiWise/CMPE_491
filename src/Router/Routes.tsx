import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import TeamPage from '../Pages/TeamPage/TeamPage'


export const router = createBrowserRouter([
    {path: "/",element:<HomePage/>},
    {path:"/CMPE_491",element:<HomePage/>},
    {path:"/team",element:<TeamPage/>}
])

