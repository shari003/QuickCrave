import React, { useState } from 'react';
import MenuItems from './MenuItems';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const Menu = ({title, data}) => {
    const [showAccordion, setShowAccordion] = useState(true);

    return (
        <div className='menu-category'>
            <h2 onClick={() => setShowAccordion(!showAccordion)}>
                <span>{title} ({data.length})</span>
                {!showAccordion ? (<span className='icon-accord'><FontAwesomeIcon icon={faSortDown} /></span>) : (
                    <span className='icon-accord'><FontAwesomeIcon icon={faSortUp} /></span>
                )}
            </h2>
            {showAccordion && 
                data.map((item) => (
                    <MenuItems key={item?.card?.info?.id} name={item?.card?.info?.name} price={item?.card?.info?.price || item?.card?.info?.defaultPrice} img_id={item?.card?.info?.imageId} description={item?.card?.info?.description} />
                ))
            }
            <div className='category-sep'>

            </div>
        </div>
    )
}

export default Menu