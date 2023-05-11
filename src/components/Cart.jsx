import { useSelector, useDispatch } from "react-redux";

import FootItem from "./FoodItem";
import {
  clearItemFromCart,
  removeItemFromCart,
  increaseQuantity,
} from "../store/cartSlice";

const Cart = () => {
  const style = {
    paddingTop: "100px",
  };

  const style2 = {
    display: "flex",
  };

  const cartItems = useSelector((store) => store.cart.cartItems); // SUBSCRIBING TO THE CART SLICE

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItemFromCart());
  };

  const removeItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const incrementHandler = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  return (
    <div>
      <h1 style={style}>Cart Items</h1>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      <h2>{cartItems.length}</h2>

      <div style={style2}>
        {cartItems.map((item) => (
          <div key={item.card?.info?.id}>
            <FootItem
              name={item.card?.info?.name}
              price={item.card?.info?.price}
              imageId={item.card?.info?.imageId}
            />
            <h2>ID: {item.card?.info?.id}</h2>
            <button
              onClick={() => removeItem(item.card?.info?.id)}
              // onClick={clearItemHandler(item.card?.info?.id)}
            >
              Remove &#10006;
            </button>

            <button onClick={() => incrementHandler(item.card?.info?.id)}>
              {" "}
              Increase +{" "}
            </button>
            <button> Decrease - </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
