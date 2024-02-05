import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { Layout } from 'antd'

function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
