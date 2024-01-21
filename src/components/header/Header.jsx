import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import logo from '../../public/assets/cooking64.png';
import { Link, useLocation } from 'react-router-dom';
import { linkStyle } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { setCoords } from '../../utils/store/slices/globalSlice.js';
import { useGeolocated } from "react-geolocated";

const Header = () => {
    const loc = useLocation();
    const cart = useSelector(store => store.cart);
    const cartItems = cart.items.reduce((acc, curr) => {return acc + curr.count}, 0);
    const dispatch = useDispatch();

    function getUserLocation() {

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                dispatch(setCoords({latitude: latitude.toString(), longitude: longitude.toString()}));
            }, (error) => {
                alert(`Error getting user's location: ${error.message}`)
            })
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    useEffect(() => {
        getUserLocation();
    }, [])
    
    const handleLocation = () => {
        getUserLocation();
    }

    const styleLi = (pathName) => {
        return {textDecoration: 'none', color: 'black', borderBottom: loc.pathname === pathName ? '2px solid red' : 'none'};
    }

    return (
        <main className='flex justify-between px-8 bg-[#F6B17A]'>
            <div className='logo-container flex justify-between w-3/12'>
                <Link className='flex items-center' to={'/'}>
                    <img className='m-[9px]' src={logo} alt="main_logo" />
                    <h1 className='ml-4 mt-1 text-3xl font-bold logo-heading'>QuickCrave</h1>
                </Link>
                <button className='text-xl' onClick={handleLocation}><FontAwesomeIcon icon={faLocationDot} /></button>
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
                    {/* <Link className='p-[9px] m-5 text-xl hover:duration-300 hover:bg-white hover:rounded hover:border-b-0 hover:text-red' to={'/contact'} style={styleLi('/contact')}>
                        <li style={styleLi('/contact')}>
                            Contact Us
                        </li>
                    </Link> */}
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