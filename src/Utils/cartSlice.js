import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        //state is the previous state, initially it's 'initialState'
        addItem: (state, action)=>{
            //don't return anything, only take state and modify
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state) => {
            //write your own logic
            state.items.pop();
        }
    }
});

//cartSlice will be as an object as {actions: {addItem: ..., removeItem: ..., clearItem: ...}, reducer: reducers}

//export the actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

//all the 'reducers' combine and we export as 'reducer'
export default cartSlice.reducer;