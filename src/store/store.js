import {configureStore} from "@reduxjs/toolkit";
import cartReducer , {getTotal, getTotals} from "./cartSlice";

const store=configureStore({
    reducer:{
        cart:cartReducer

    }
});
store.dispatch(getTotals());
export default store;