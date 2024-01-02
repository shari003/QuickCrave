import React from 'react';
import logo from '../../public/assets/cooking64.png';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { linkStyle } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const loc = useLocation();

    const styleLi = (pathName) => {
        return {textDecoration: 'none', color: 'black', borderBottom: loc.pathname === pathName ? '2px solid red' : 'none'};
    }

    return (
        <main className='header'>
            <div className='logo-container'>
                <Link to={'/'}>
                    <img className='logo' src={logo} alt="main_logo" />
                </Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <Link to={'/'} style={styleLi('/')}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to={'/about'} style={styleLi('/about')}>
                        <li>
                            About Us
                        </li>
                    </Link>
                    <Link to={'/contact'} style={styleLi('/contact')}>
                        <li style={styleLi('/contact')}>
                            Contact Us
                        </li>
                    </Link>
                    <Link to={'/cart'} style={linkStyle}>
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </li>
                    </Link>
                </ul>
            </div>
        </main>
    )
}

export default Header