import React from 'react';
import './menu.css';
import { CLOUDINARY_IMG_URL } from '../../utils/constants.js';

const MenuItems = ({name, price, img_id, description}) => {
  
  return (
    <div className='item'>
        <div className='item-info'>
            <p className='item-name'>{name}</p>
            <p className='item-price'>&#8377;{price/100}</p>
            <p className='item-desc'>{description}</p>
        </div>
        <div className='item-img'>
            {img_id && 
              <img src={CLOUDINARY_IMG_URL+img_id} alt="item_img" />
            }
        </div>
    </div>
  )
}

export default MenuItems