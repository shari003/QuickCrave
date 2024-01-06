import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='bg-slate-700 text-white text-center py-5'>
                <h1>Made with ❤️, by <a className='bg-black p-1 hover:bg-white hover:text-black' href={'https://shri-dev.vercel.app/'} target='_blank'>KSH</a></h1>
            </footer>
        </>
    )
}

export default Footer