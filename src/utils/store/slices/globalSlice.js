import {createSlice} from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        coords: {
            lat: '28.5222633',
            lng: '77.1722417' 
        }
    },
    reducers: {
        setCoords: (state, action) => {
            const {latitude, longitude} = action.payload;
            state.coords.lat = latitude;
            state.coords.lng = longitude;
        }
    }
});

export const {setCoords} = globalSlice.actions;

export default globalSlice.reducer;