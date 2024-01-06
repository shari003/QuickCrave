import React from 'react';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MenuItems from '../../components/MenuItems/MenuItems';
import { clearCart } from '../../utils/store/slices/cartSlice';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((acc, curr) => {return acc + (curr.price/100)*(curr.count)}, 0);

    return (
        <>
           <main className='w-[85%] mx-auto my-6'>
                <h1 className='text-2xl font-bold text-center'>Your Cart</h1>
                {cartItems.length > 0 ? (
                    <>
                        <div className='w-[600px] mx-auto my-4'>
                            {cartItems.map((item) => (
                                <div className='flex items-center'>
                                    <MenuItems key={item?.id} id={item?.id} name={item?.name} price={item?.price} img_id={item?.img_id} description={item?.description} defaultPrice={item?.price} veg_classifier={item?.veg_classifier} />
                                    <h1 className='ml-8 text-2xl font-bold'>x{item.count}</h1>
                                </div>
                            ))}
                        </div>
                        <h1 className='text-2xl font-bold text-center'>Sub Total : <span className='text-green-600'>&#8377; {total}</span></h1>
                        <button onClick={() => dispatch(clearCart())} className='block mx-auto bg-red-600 text-white rounded-md p-2 my-5'>Clear Cart</button>
                    </>
                ) : (
                    <>
                        <h1 className='text-xl font-semibold text-center mt-8'>Add Items to your Cart - <span className='font-extrabold underline text-blue-800'><Link to={'/'}>Explore</Link></span></h1>

                    </>
                )}
           </main> 
        </>
    )
}

export default Cart