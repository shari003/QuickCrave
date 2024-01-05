import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { menu_api } from "../../utils/constants";
import Menu from "../../components/MenuItems/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyCheck, faStar } from '@fortawesome/free-solid-svg-icons';

const Restaurant = () => {
    const params = useParams();
    const [resInfo, setResInfo] = useState([]);
    const [showIndex, setShowIndex] = useState(-1);

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

    let menuItems = [];
    if(offers !== undefined){
        menuItems = offers.filter((offer) => {
            return 'title' in offer?.card?.card && 'itemCards' in offer?.card?.card;
        });
    }

    const handleSetShowAccordion = (idx) => {
        if(idx !== showIndex && showIndex === -1){ // open accordion for first time
            setShowIndex(idx);
        }
        else if(idx === showIndex){ // close accordion
            setShowIndex(-1);
        }
        else { // show other accordion
            setShowIndex(idx);
        }
    }

    return (
        <>
            <div className="md:flex flex-wrap bg-white md:w-[88%] my-[5px] mx-auto">
                <div className="my-8 mx-48 md:w-full md:flex flex-wrap justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold pt-1">{res?.name}</h1>
                        <p className="pt-1">{(res?.cuisines).join(", ")}</p>
                        <p className="pt-1">{res?.areaName}, {res?.sla?.lastMileTravelString}</p>
                        <p className="pt-1">{res?.feeDetails?.message}</p>
                    </div>
                    <div className="res-analytics p-2 border border-solid border-[black] rounded">
                        <p className="mb-2 text-center"><FontAwesomeIcon color="green" icon={faStar} /> {res?.avgRating}</p>
                        <hr />
                        <p className="mt-2">{res?.totalRatingsString}</p>
                    </div>
                </div>
                <hr className="w-full mx-48" />

                <div className="mx-48 my-8 flex w-full">
                    <p className="pr-7"><FontAwesomeIcon icon={faClock} /> {res?.sla?.maxDeliveryTime} MINS</p>
                    <p><FontAwesomeIcon icon={faMoneyCheck} /> {res?.costForTwoMessage}</p>
                </div>
                <hr className="w-full mx-48" />

                <div className="my-8 mx-48 w-full">
                    {
                        menuItems.length > 0 && menuItems.map((item, i) => (
                            <Menu key={i} idx={i} title={item?.card?.card?.title} data={item?.card?.card?.itemCards} showAccordion={i === showIndex && true} setShowAccordion={(idx) => handleSetShowAccordion(idx)} />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default Restaurant