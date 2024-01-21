import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";
import globalReducer from "./slices/globalSlice.js";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        global: globalReducer
    }
});

export default appStore;