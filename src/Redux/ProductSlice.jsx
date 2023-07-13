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
        add(state, action) {
            const existingItem = state.item.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.item.push({ ...action.payload, quantity: 1 });
            }
          },
          
        remove(state,action){
            console.log("id",action.payload);
            state.item= state.item.filter((res)=>res.id!=action.payload)
        },
        search(state, action) {
            const newData = state.Data
            const searchValue = action.payload.toLowerCase();
          
            if (searchValue.length >= 3) {
              state.Data = state.Data.filter((res) =>
                res.title.toLowerCase().includes(searchValue)
              );
            } else {
                console.log("this is the else statement ")
              state.Data = newData
            }
          },
          addQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.item.find(item => item.id === itemId);
          
            if (itemToUpdate) {
              itemToUpdate.quantity += 1;
            }
          },
          removeQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.item.find(item => item.id === itemId);
          
            if (itemToUpdate) {
              itemToUpdate.quantity -= 1;
            }
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

export const {add,remove,search,addQuantity,removeQuantity} = Product.actions

export default Product.reducer