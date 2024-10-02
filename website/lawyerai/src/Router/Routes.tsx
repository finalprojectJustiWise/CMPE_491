import { create } from 'domain'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../Pages/HomePage/HomePage'
import TeamPage from '../Pages/TeamPage/TeamPage'

type Props = {}

export const router = createBrowserRouter([
    {path: "/",element:<HomePage/>},
    {path:"/team",element:<TeamPage/>}
])

