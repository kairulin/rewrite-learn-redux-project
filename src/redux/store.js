import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/productSlide'
export const store = configureStore({
    reducer:{
        products:productReducer
    }
})