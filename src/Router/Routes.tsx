import { createHashRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import TeamPage from '../Pages/TeamPage/TeamPage'


export const router = createHashRouter([
    {path:"/",element:<HomePage/>},
    {path:"/CMPE_491",element:<HomePage/>},
    {path:"/team",element:<TeamPage/>}
])

