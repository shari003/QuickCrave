import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import './index.css'
import Body from "./pages/homePage/Body.jsx";
import Main from './index.js';
import About from "./pages/aboutPage/About.jsx";
import appStore from "./utils/store/appStore.js";
// import Restaurant from "./pages/restaurantMenuPage/Restaurant.jsx";

const AppLayout = () => {

    const Restaurant = lazy(() => import("./pages/restaurantMenuPage/Restaurant.jsx"))
    const Cart = lazy(() => import("./pages/Cart/Cart.jsx"));


    return (
        <>  
            <Provider store={appStore}>
                <BrowserRouter>
                    <Routes>
                        {/* Using Outlet */}
                        <Route path="/" element={<Main />} >
                            <Route path="/" element={<Body />} />
                            <Route path="/about" element={<About />} />            
                            <Route path="/restaurant/:resId" element={<Suspense fallback={<h1>Loading...</h1>}><Restaurant /></Suspense>} />
                            <Route path="/cart" element={<Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>} />            
                        </Route>
                        <Route path="*" element={<Navigate to={'/'} replace={true} />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);