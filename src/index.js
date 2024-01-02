import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Main