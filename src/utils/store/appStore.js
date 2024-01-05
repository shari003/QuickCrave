import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;