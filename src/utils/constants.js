export const CLOUDINARY_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5222633&lng=77.1722417&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const SWIGGY_RES_MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5204637&lng=77.17866599999999&restaurantId=253711&catalog_qa=undefined&submitAction=ENTER";

export const menu_api = (resId) => {
    return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5204637&lng=77.17866599999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
}

export const linkStyle ={ textDecoration: 'none', color: 'black' };