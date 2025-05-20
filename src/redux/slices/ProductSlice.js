import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
    let res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=a")
    return res.data.items;
})
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isloading: false
    },
    reducers: {
    },
    extraReducers: (bulider) => {
        bulider.addCase(getAllProducts.pending, (state, action) => {
            state.isloading = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isloading = false;
            state.products = action.payload;
        }).addCase(getAllProducts.rejected, (state, action) => {
            console.log("error");
        })
    }
})

export default productSlice.reducer;