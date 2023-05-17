// import { RemoveCircleOutlineSharp } from "@ricons/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "@ricons/utils";
import ArrowBackFilled from "@ricons/material/ArrowBackFilled";
import DeleteForeverFilled from "@ricons/material/DeleteForeverFilled";

import FoodItem from "./FoodItem";
import { clearItemFromCart, getTotals } from "../store/cartReducer";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleClearCart = () => {
    dispatch(clearItemFromCart());
  };
  return (
    <div className="py-32 px-64">
      <h2 className="font-normal text-3xl text-center"> CART</h2>
      {cartItems.length === 0 ? (
        <div className="text-center py-28">
          <p className="font-semibold text-xl">Your cart is currently empty</p>
          <div className="">
            <Link to="/" className="text-green-500 hover:underline">
              <Icon color="green" size="13">
                <ArrowBackFilled />
              </Icon>
              <span> Start looking at the restraunts </span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-16 grid items-center	grid-cols-5 gap-2 border-t-1 border-b-2 border-gray-300 py-3">
            <h3 className="flex ml-20 text-sm font-normal uppercase col-span-2">
              Item
            </h3>
            <h3 className="text-sm font-normal uppercase flex justify-center">
              Price
            </h3>
            <h3 className="text-sm font-normal uppercase flex justify-center">
              Quantity
            </h3>
            <h3 className="text-sm font-normal uppercase flex justify-end">
              Total
            </h3>
          </div>
          <div>
            {cartItems.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-between items-start border-solid border-2 border-white pt-16">
            <button
              onClick={() => handleClearCart()}
              className="flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              <Icon size="24">
                <DeleteForeverFilled />
              </Icon>
              Clear Cart
            </button>

            <div>
              <div className="flex justify-between mb-4">
                <span className="flex justify-between">TO PAY:</span>
                <span className="font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(cart.cartTotalAmount / 100)}
                </span>
              </div>
              <p>
                GST, Delivery Fee, and Restaurant Charges are calculated at
                checkout.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                CHECKOUT
              </button>
              <div className="mt-4">
                <Link
                  to="/"
                  className="flex items-center text-green-500 hover:underline"
                >
                  <Icon color="green" size="32" className="mr-2">
                    <ArrowBackFilled />
                  </Icon>
                  <span className="">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
