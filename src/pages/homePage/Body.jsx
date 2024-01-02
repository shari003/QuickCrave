import React, { useEffect, useState } from 'react';
import RestaurantCard from '../../components/restaurantCard/RestaurantCard.jsx';
import './body.css';
import { SWIGGY_API, linkStyle } from "../../utils/constants.js";
import ShimmerCards from '../../components/shimmer/ShimmerCards.jsx';
import { Link } from 'react-router-dom';

const Body = () => { 
    const [resList, setResList] = useState([]);
    const [filterResList, setFilterResList] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    useEffect(() => {
        // fetching real time data from the API and setting to the state variable.
        const fetchData = async() => {
            const response = await fetch(SWIGGY_API, {
                method: "GET"
            });
            const data = await response.json();
            const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResList(restaurants);
            setFilterResList(restaurants);
        }

        fetchData();
    }, []);

    const filterRestaurantHandler = () => {
        const filteredRestaurants = resList.filter((res) => res?.info?.avgRating > 4);
        setFilterResList(filteredRestaurants);
    }

    const searchFilter = () => {
        const filteredRestaurants = resList.filter((res) => res?.info?.name?.toLowerCase().includes(searchVal.toLowerCase()));
        setFilterResList(filteredRestaurants);
    }

    return (
        <main className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type="text" name="search-field" id="searchField" value={searchVal}   onChange={(e) => setSearchVal(e.target.value)} />
                    <label htmlFor="searchField">
                        <button className='search-btn' onClick={searchFilter}>Search</button>
                    </label>
                </div>
                <button className='filter-btn' onClick={filterRestaurantHandler}>
                    Top Rated Restaurants
                </button>
            </div>
            {
                filterResList.length === 0 ? (
                    <>
                        <ShimmerCards />
                    </>
                ) : (
                <div className="res-container">
                    {filterResList?.map((res) => (
                        <Link key={res?.info?.id} to={`/restaurant/${res?.info?.id}`} style={linkStyle}>
                            <RestaurantCard resName={res?.info?.name} rating={res?.info?.avgRating} eta={res?.info?.sla?.deliveryTime} cuisines={res?.info?.cuisines} location={`${res?.info?.locality}, ${res?.info?.areaName}`} img_id={res?.info?.cloudinaryImageId} price={res?.info?.costForTwo} />
                        </Link>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Body