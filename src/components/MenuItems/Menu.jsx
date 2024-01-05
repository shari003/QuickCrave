import React, { useState } from 'react';
import MenuItems from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const Menu = ({idx, title, data, showAccordion, setShowAccordion}) => {
    // const [showAccordion, setShowAccordion] = useState(true);
    const handleAccordionClick = (ind) => {
        setShowAccordion(ind);
    }

    return (
        <div className='my-7'>
            <h2 className='text-2xl font-semibold flex justify-between cursor-pointer' onClick={() => handleAccordionClick(idx)}>
                <span className='block'>{title} ({data.length})</span>
                {!showAccordion ? (<span className='mr-4'><FontAwesomeIcon icon={faSortDown} /></span>) : (
                    <span className='mr-4'><FontAwesomeIcon icon={faSortUp} /></span>
                )}
            </h2>
            {showAccordion && 
                data.map((item) => (
                    <MenuItems key={item?.card?.info?.id} id={item?.card?.info?.id} name={item?.card?.info?.name} price={item?.card?.info?.price || item?.card?.info?.defaultPrice} img_id={item?.card?.info?.imageId} description={item?.card?.info?.description} veg_classifier={item?.card?.info?.itemAttribute?.vegClassifier} />
                ))
            }
            <div className='mt-4 h-4 bg-[#f1f1f6]'>
            </div>
        </div>
    )
}

export default Menu