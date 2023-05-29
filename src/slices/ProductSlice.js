import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { filterByCategory, filterPrice, searching } from "../utils/utils";


let allProducts = null;
const initialState = {
    products : [],
    loading : false,
    error : false,
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        let {data} = await axios(`${process.env.REACT_APP_API_URL}api/v1/products/`);
        return data;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async ({token, productId}) => {
    try {
        let {data} = await axios.delete(`${process.env.REACT_APP_API_URL}api/v1/products/delete/${productId}`, {
            headers : {
                authorization : `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const updateProduct = createAsyncThunk("products/updateProduct", async ({formData, token, productId}) => {
    try {
        let {data} = await axios.put(`${process.env.REACT_APP_API_URL}api/v1/products/update/${productId}`, formData , {
            headers : {
                authorization : `Bearer ${token}`
            }
        });
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const addProduct = createAsyncThunk("products/addProduct", async ({formData, token}) => {
    try {
        let {data} = await axios.post(`${process.env.REACT_APP_API_URL}api/v1/products/create`, formData , {
            headers : {
                authorization : `Bearer ${token}`
            }
        });
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})



const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
           searchProducts : (state, action) => {
            const result = searching(allProducts, "name", action.payload.keyword);
            state.products = result;
           },
           filterByPrice : (state, action) => {
            const result = filterPrice(allProducts, action.payload.price)
            state.products = result;
           },
           filterCategory : (state, action) => {
            const result = filterByCategory(allProducts, action.payload.categoryArray)
            state.products = result;
           }
    },
    extraReducers : {
        [fetchProducts.pending] : (state) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled] : (state, action) => {
            state.loading = false;
            state.products = action.payload;
            allProducts = action.payload
        },
        [fetchProducts.rejected] : (state, action) => {
            state.loading = false;
            state.products = null;
            state.error = action.error.message;
        },
        [deleteProduct.pending] : (state) => {
            state.loading = true;
        },
        [deleteProduct.fulfilled] : (state, action) => {
            state.loading = false;
            let index = state.products.findIndex(product => product._id === action.payload._id)
            state.products.splice(index, 1)
            allProducts = state.products;
        },
        [deleteProduct.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateProduct.pending] : (state) => {
            state.loading = true;
        },
        [updateProduct.fulfilled] : (state, action) => {
            state.loading = false;
            let index = state.products.findIndex(product => product._id === action.payload._id)
            state.products.splice(index, 1, action.payload)
            allProducts = state.products;
        },
        [updateProduct.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [addProduct.pending] : (state) => {
            state.loading = true;
        },
        [addProduct.fulfilled] : (state, action) => {
            state.loading = false;
            state.products = [action.payload, ...state.products]
            allProducts = state.products;
        },
        [addProduct.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
})

export const  {searchProducts, filterByPrice, filterCategory} = productSlice.actions;

export default productSlice.reducer;