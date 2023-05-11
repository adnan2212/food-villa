import { createSlice } from "@reduxjs/toolkit";

export const CART_INITIAL_STATE = {
  cartItems: [],
};

// const addItemToCart = (state, action) => {};
// const removeCartItem = (cartItems, cartItemToRemove) => {};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems.push(action.payload);
    },

    removeItemFromCart(state, action) {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
      state.cartItems.length--;
    },

    clearItemFromCart(state, action) {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
