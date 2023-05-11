import { configureStore } from "@reduxjs/toolkit";

// import { cartReducer } from "./cartSlice";
import { rootReducer } from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
  // reducer: {
  //   cart: cartReducer,
  // },
});

export default store;
