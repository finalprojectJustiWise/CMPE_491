import { createHashRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import TeamPage from '../Pages/TeamPage/TeamPage'
import PDFPage from '../Pages/PDFPage/PDFPage'


export const router = createHashRouter([
    {path:"/",element:<HomePage/>},
    {path:"/CMPE_491",element:<HomePage/>},
    {path:"/team",element:<TeamPage/>},
    {path:"/files",element:<PDFPage/>}
])

