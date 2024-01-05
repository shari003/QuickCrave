import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const itemExists = state.items.some(item => item.id === action.payload.id);
            if(!itemExists){
                const newItemObj = {...action.payload, count: 1};
                state.items.push(newItemObj);
            } else {
                const updatedItems = state.items.map((item) => {
                    if(item.id === action.payload.id){
                        const newCount = item.count + 1;
                        return {...item, count: newCount};
                    } 
                    return item;
                });
                state.items = updatedItems;
            }
        },
        removeItem: (state, action) => {
            const updatedItems = state.items.map((item) => {
                if(item.id === action.payload && item.count > 0){
                    return {...item, count: item.count - 1};
                }
                return item;
            }).filter(item => item.count !== undefined && item.count !== 0);

            state.items = updatedItems;
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;