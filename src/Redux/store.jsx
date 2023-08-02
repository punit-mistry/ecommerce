import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./Productslice";
const store = configureStore({
  reducer: {
    product: Productslice,
  },
});

export default store;
