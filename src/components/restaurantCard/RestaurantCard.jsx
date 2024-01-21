import React from 'react';
import { CLOUDINARY_IMG_URL } from '../../utils/constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapPin, faBowlFood } from '@fortawesome/free-solid-svg-icons';


const RestaurantCard = ({resName, rating, eta, cuisines, price, locality, areaName, img_id}) => {
    let location = "";
    if(locality === undefined){
        location = areaName;
    } else {
        location = `${locality}, ${areaName}`
    }
    return (
        <div className='bg-white rounded-md border border-solid border-white cursor-pointer p-1 m-1 w-[310px] duration-500 hover:shadow-3xl'>
            <div className='p-1'>
                <img className='rounded-[4%] w-full h-[150px] object-cover' src={CLOUDINARY_IMG_URL+img_id} alt="res_logo" />
            </div>
            <div className='mt-2 mx-2'>
                <h3 className='text-xl font-bold mt-2'>{resName}</h3>
                <p className='mt-2'>
                    <span className='pr-1'><FontAwesomeIcon style={{color: 'green'}} icon={faStar} /> {rating}</span>
                    • 
                    <span className='pl-1'>{eta} mins</span>
                </p>
                <h4 className='mt-2'>{price}</h4>
                <p style={{fontWeight: "500"}} className='mt-2'><FontAwesomeIcon icon={faBowlFood} /> {cuisines.join(", ").slice(0,30) + '...'}</p>
                <h4 className='mt-2'><FontAwesomeIcon style={{color: 'red'}} icon={faMapPin} /> {location.slice(0,25) + '...'}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard