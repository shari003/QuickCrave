import React from 'react';
import { CLOUDINARY_IMG_URL } from '../../utils/constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/store/slices/cartSlice.js";

const MenuItems = ({id, name, price, img_id, description, defaultPrice, veg_classifier}) => {
  // const {id, name, price, imageId: img_id, description, defaultPrice} = data?.card?.info;
  // const {vegClassifier: veg_classifier} = data?.card?.info?.itemAttribute;

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);

  const handleAddItem = () => {
    const itemObj = {
      id: id,
      name,
      price,
      img_id,
      description,
      veg_classifier
    };
    dispatch(addItem(itemObj));
  }

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  }

  const countItem = cartItems.find(item => item.id === id);

  return (
    <div className='py-6 mx-4 my-[2px] flex justify-between items-center border-b border-black'>
        <div className='w-10/12'>
            <p><FontAwesomeIcon color={veg_classifier === "NONVEG" ? 'red' : 'green'} icon={faDotCircle} /></p>
            <p className='pb-[5px] text-xl font-extrabold mr-36'>{name}</p>
            <p>&#8377;{(price || defaultPrice)/100}</p>
            <p className='mt-1 mr-40'>{description}</p>
        </div>
        <div className='w-2/12'>
            {img_id && 
              <img className='w-[120px] h-[100px] object-cover rounded mx-auto block border border-solid border-black' src={CLOUDINARY_IMG_URL+img_id} alt="item_img" />
            }

            <div className='mt-2'>
              {
                cartItems.some((item) => item.id === id) ? (
                  <>
                    <div className='flex'>
                      <button onClick={handleRemoveItem} className='text-white bg-red-600 p-1 mx-auto block text-xl'>-</button>
                      {countItem.count}
                      <button onClick={handleAddItem} className='text-white bg-green-600 p-1 mx-auto block text-xl'>+</button>
                    </div>
                  </>
                ) : (
                  <>
                    <button onClick={handleAddItem} className='text-white bg-green-600 p-1 rounded-md mx-auto block text-xs'>ADD +</button>
                  </>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default MenuItems