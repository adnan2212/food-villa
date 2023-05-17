import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CART_INITIAL_STATE = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        toast.info(
          `increased ${state.cartItems[itemIndex].name}  item quantity !`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const item = { ...action.payload, quantity: 1 };
        state.cartItems.push(item);

        toast.success(`${action.payload.name} added to cart.`, {
          position: "bottom-left",
        });
      }
    },

    removeItemFromCart(state, action) {
      const itemId = action.payload.id;
      toast.error(`${action.payload.name} removed from cart.`, {
        position: "bottom-left",
      });
      const updatedItems = state.cartItems.filter((item) => item.id !== itemId);

      return { ...state, cartItems: updatedItems };
    },

    decreaseItemFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity === 1) {
        toast.error(`${action.payload.name} removed from cart.`, {
          position: "bottom-left",
        });
        const updatedItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        return { ...state, cartItems: updatedItems };
      } else {
        state.cartItems[itemIndex].quantity -= 1;
        toast.info(
          `decreased ${state.cartItems[itemIndex].name}  item quantity !`,
          {
            position: "bottom-left",
          }
        );
      }
    },

    increaseItemFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[itemIndex].quantity += 1;
      toast.info(
        `increased ${state.cartItems[itemIndex].name}  item quantity !`,
        {
          position: "bottom-left",
        }
      );
    },

    clearItemFromCart(state, action) {
      state.cartItems = [];
      toast.error(`All items removed from cart.`, {
        position: "bottom-left",
      });
    },

    getTotals(state, action) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
  increaseItemFromCart,
  clearItemFromCart,
  getTotals,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
