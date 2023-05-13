import { createSlice, current } from "@reduxjs/toolkit";

export const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems.push(action.payload);
    },

    showCartItems(state, action) {
      console.log("Action: " + action.payload);
      console.log("cart items: ", state.cartItems);
    },

    removeItemFromCart(state, action) {
      const itemId = action.payload;

      const updatedItems = state.cartItems.filter((item) => item.id !== itemId);
      console.log("UPDATED ITEMS", updatedItems);
      return { ...state, cartItems: updatedItems };
    },

    clearItemFromCart(state, action) {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  showCartItems,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
