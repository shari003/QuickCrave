import React from 'react';
import { CLOUDINARY_IMG_URL } from '../../utils/constants.js';

const MenuItems = ({name, price, img_id, description}) => {
  
  return (
    <div className='py-6 mx-4 my-[2px] flex justify-between items-center border-b border-black'>
        <div className='item-info'>
            <p className='pb-[5px] text-xl font-extrabold mr-36'>{name}</p>
            <p>&#8377;{price/100}</p>
            <p className='mt-1 mr-40'>{description}</p>
        </div>
        <div className='item-img'>
            {img_id && 
              <img className='w-[120px] h-[100px] object-cover rounded' src={CLOUDINARY_IMG_URL+img_id} alt="item_img" />
            }
        </div>
    </div>
  )
}

export default MenuItems