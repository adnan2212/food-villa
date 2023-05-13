import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";
// import { cartReducer } from "./cartReducer";

const store = configureStore({
  reducer: rootReducer,
  // reducer: {
  //   cart: cartReducer,
  // },
});

export default store;
