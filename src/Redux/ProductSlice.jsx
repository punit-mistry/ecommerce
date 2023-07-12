import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const FetchData = createAsyncThunk('fetchdata',async()=>{
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data 
})



const Product = createSlice({
    name:"product",
    initialState:{
        isLoading: false,
        Data:[],
        isError: false,
        item:[],
    },
    reducers:{
        add(state,action){
        state.item.push(action.payload);  
        },
        remove(state,action){
            console.log("id",action.payload);
            state.item= state.item.filter((res)=>res.id!=action.payload)
        }
    },
    extraReducers:{
        [FetchData.pending]:(state,action)=>{
            state.isLoading = true
        },
        [FetchData.fulfilled]:(state,action)=>{
            state.isLoading = false,
            state.Data = action.payload
        },
        [FetchData.rejected]:(state,action)=>{
            state.isError = true
        },
    }
        
    
});

export const {add,remove} = Product.actions

export default Product.reducer