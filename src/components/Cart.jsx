// import { RemoveCircleOutlineSharp } from "@ricons/material";
import RemoveCircleOutlineSharp from "@ricons/material/RemoveCircleOutlineSharp";
import DataArrayOutlined from "@ricons/material/DataArrayOutlined";
import DeleteForeverFilled from "@ricons/material/DeleteForeverFilled";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@ricons/utils";
import { selectCartItems } from "../store/cart.selector";

import FoodItem from "./FoodItem";

import {
  clearItemFromCart,
  removeItemFromCart,
  showCartItems,
} from "../store/cartReducer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItemFromCart());
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="m-2 text-center text-lg font-bold p-3">
          Cart Items - {cartItems.length}
        </h1>
        <button
          onClick={() => handleClearCart()}
          className="px-2  m-2 text-lg font-bold text-red-700 bg-slate-500 rounded-lg"
        >
          ✖ Clear Cart
        </button>
      </div>
      {cartItems.map((itemss) => (
        <FoodItem key={itemss.id} {...itemss} />
      ))}
    </div>
  );
};

export default Cart;
