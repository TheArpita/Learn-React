import { configureStore } from "@reduxjs/toolkit";

//by default it's exporting reducer, we need to add all the reducers to the store
import cartSlice from "./cartSlice";

//store should contain slices
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store;