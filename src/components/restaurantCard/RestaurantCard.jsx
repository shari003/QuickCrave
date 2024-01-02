import React from 'react';
import './card.css';
import { CLOUDINARY_IMG_URL } from '../../utils/constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapPin, faBowlFood } from '@fortawesome/free-solid-svg-icons';


const RestaurantCard = ({resName, rating, eta, cuisines, price, location, img_id}) => {
    return (
        <div className='res-card'>
            <div className='res-logo-container'>
                <img className='res-image' src={CLOUDINARY_IMG_URL+img_id} alt="res_logo" />
            </div>
            <div className='res-info'>
                <h3 className='res-name'>{resName}</h3>
                <p className='res-eta-rating'>
                    <span><FontAwesomeIcon style={{color: 'green'}} icon={faStar} /> {rating}</span>
                    • 
                    <span>{eta} mins</span>
                </p>
                <h4>{price}</h4>
                <p style={{fontWeight: "500"}} className='res-cuisines'><FontAwesomeIcon icon={faBowlFood} /> {cuisines.join(", ")}</p>
                <h4 className='res-location'><FontAwesomeIcon style={{color: 'red'}} icon={faMapPin} /> {location}</h4>
            </div>

        </div>
    )
}

export default RestaurantCard