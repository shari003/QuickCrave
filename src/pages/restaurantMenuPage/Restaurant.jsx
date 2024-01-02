import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import './restaurant.css';
import { menu_api } from "../../utils/constants";
import Menu from "../../components/MenuItems/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyCheck, faStar } from '@fortawesome/free-solid-svg-icons';

const Restaurant = () => {
    const params = useParams();
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        const fetchResData = async() => {
            const response = await fetch(menu_api(params.resId));
            const data = await response.json();
            setResInfo(data?.data?.cards);
        }   
        fetchResData();
    }, []);

    if(resInfo.length === 0) return null;
    const res = resInfo[0]?.card?.card?.info;

    const offers = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards; // array of offers

    const menuItems = offers.filter((offer) => {
        return 'title' in offer?.card?.card && 'itemCards' in offer?.card?.card;
    });

    return (
        <>
            <div className="menu-container">
                <div className="main-info">
                    <div className="res-data">
                        <h1>{res?.name}</h1>
                        <p>{(res?.cuisines).join(", ")}</p>
                        <p>{res?.areaName}, {res?.sla?.lastMileTravelString}</p>
                        <p>{res?.feeDetails?.message}</p>
                    </div>
                    <div className="res-analytics">
                        <p><FontAwesomeIcon icon={faStar} /> {res?.avgRating}</p>
                        <hr />
                        <p>{res?.totalRatingsString}</p>
                    </div>
                </div>
                <hr className="separator" />
                <div className="extra-info">
                    <p><FontAwesomeIcon icon={faClock} /> {res?.sla?.maxDeliveryTime} MINS</p>
                    <p><FontAwesomeIcon icon={faMoneyCheck} /> {res?.costForTwoMessage}</p>
                </div>
                <hr className="separator" />

                <div className="menu-items">
                    {
                        menuItems.map((item) => (
                            <Menu title={item?.card?.card?.title} data={item?.card?.card?.itemCards} />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default Restaurant