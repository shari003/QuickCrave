import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Body from "./pages/homePage/Body.jsx";
import Main from './index.js';
import About from "./pages/aboutPage/About.jsx";
import Restaurant from "./pages/restaurantMenuPage/Restaurant.jsx";

const AppLayout = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Using Outlet */}
                    <Route path="/" element={<Main />} >
                        <Route path="/" element={<Body />} />
                        <Route path="/about" element={<About />} />            
                        <Route path="/restaurant/:resId" element={<Restaurant />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);