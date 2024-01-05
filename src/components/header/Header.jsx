import React from 'react';
import {useSelector} from "react-redux";
import logo from '../../public/assets/cooking64.png';
import { Link, useLocation } from 'react-router-dom';
import { linkStyle } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const loc = useLocation();
    const cart = useSelector(store => store.cart);
    const cartItems = cart.items.reduce((acc, curr) => {return acc + curr.count}, 0);

    const styleLi = (pathName) => {
        return {textDecoration: 'none', color: 'black', borderBottom: loc.pathname === pathName ? '2px solid red' : 'none'};
    }

    return (
        <main className='flex justify-between px-8 bg-[#F6B17A]'>
            <div className='logo-container'>
                <Link to={'/'}>
                    <img className='m-[9px]' src={logo} alt="main_logo" />
                </Link>
            </div>
            <div>
                <ul className='flex list-none mt-1'>
                    <Link className='p-[9px] m-5 text-xl hover:duration-300 hover:bg-white hover:rounded hover:border-b-0 hover:text-red' to={'/'} style={styleLi('/')}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link className='p-[9px] m-5 text-xl hover:duration-300 hover:bg-white hover:rounded hover:border-b-0 hover:text-red' to={'/about'} style={styleLi('/about')}>
                        <li>
                            About Us
                        </li>
                    </Link>
                    <Link className='p-[9px] m-5 text-xl hover:duration-300 hover:bg-white hover:rounded hover:border-b-0 hover:text-red' to={'/contact'} style={styleLi('/contact')}>
                        <li style={styleLi('/contact')}>
                            Contact Us
                        </li>
                    </Link>
                    <Link className='p-[9px] m-5 text-xl' to={'/cart'} style={linkStyle}>
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} />
                            ({cartItems})
                        </li>
                    </Link>
                </ul>
            </div>
        </main>
    )
}

export default Header