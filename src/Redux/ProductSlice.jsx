import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const FetchData = createAsyncThunk("fetchdata", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

const Product = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    Data: [],
    isError: false,
    item: [],
    Login: false,
  },
  reducers: {
    add(state, action) {
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      // Calculate the total price for all items in the cart
      const allItemsTotal = state.item.reduce(
        (accumulator, currentItem) =>
          accumulator + currentItem.price * currentItem.quantity,
        0
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Add the new item to the cart with quantity and Total_sum
        state.item.push({
          ...action.payload,
          quantity: 1,
          Total_sum: action.payload.price, // Initial total for this item (price * quantity)
        });
      }

      // Update the Total_sum for all items in the cart
      state.item.forEach((item) => {
        item.Total_sum = item.price * item.quantity;
      });

      // Update the total price for all items in the cart
      const totalCartPrice = state.item.reduce(
        (accumulator, currentItem) => accumulator + currentItem.Total_sum,
        0
      );
    },

    remove(state, action) {
      console.log("id", action.payload);
      state.item = state.item.filter((res) => res.id != action.payload);
    },
    search(state, action) {
      const newData = state.Data;
      const searchValue = action.payload.toLowerCase();

      if (searchValue.length >= 3) {
        state.Data = state.Data.filter((res) =>
          res.title.toLowerCase().includes(searchValue)
        );
      } else {
        console.log("this is the else statement ");
        state.Data = newData;
      }
    },
    addQuantity(state, action) {
      const itemId = action.payload;
      const itemToUpdate = state.item.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    removeQuantity(state, action) {
      const itemId = action.payload;
      const itemToUpdate = state.item.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      }
    },
    login(state, action) {
      if (
        action.payload.username.toLowerCase() == "admin" &&
        action.payload.password.toLowerCase() == "admin@123"
      ) {
        return {
          ...state,
          loggedIn: true,
        };
      } else {
        return {
          ...state,
          loggedIn: false,
        };
      }
    },
  },
  extraReducers: {
    [FetchData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [FetchData.fulfilled]: (state, action) => {
      (state.isLoading = false), (state.Data = action.payload);
    },
    [FetchData.rejected]: (state, action) => {
      state.isError = true;
    },
  },
});

export const { add, remove, search, addQuantity, removeQuantity, login } =
  Product.actions;

export default Product.reducer;
