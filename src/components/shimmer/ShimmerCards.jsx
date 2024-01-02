import React from 'react';
import ShimmerCard from './ShimmerCard';
import './shimmer.css';

const ShimmerCards = () => {
    return (
        <>
            <div className='shimmer-container'>
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </div>
        </>
    )
}

export default ShimmerCards