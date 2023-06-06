import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice.js";
import singleProductReducer from '../slices/singleProductSlice'
import cartReducer from '../slices/CartSlice'
import productReducer from "../slices/ProductSlice"
import orderSlice from "../slices/orderSlice.js";
import newProductSlice from "../slices/newProductSlice.js";

const store = configureStore({
    reducer : {
        productstate :productReducer,
        // newProductState :newProductSlice,
        userstate : userReducer,
        singleProduct : singleProductReducer,
        cartState : cartReducer,
        orderState : orderSlice,
    }
})

export default store;