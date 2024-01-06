import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main