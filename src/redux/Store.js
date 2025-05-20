// import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from './slices/CartSlice'
// export const store=configureStore({
//     reducer:{
//         cartReducer
//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/ProductSlice'
import cartReducer from './slices/CartSlice'

export const Store = configureStore({
    reducer: {
        productReducer,
        cartReducer
    }
})