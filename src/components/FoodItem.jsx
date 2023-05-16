import { useDispatch } from "react-redux";

import { ITEM_IMG_CDN_URL } from "../config";
import {
  removeItemFromCart,
  decreaseItemFromCart,
  increaseItemFromCart,
} from "../store/cartReducer";

const Fooditems = ({ name, price, imageId, id, quantity }) => {
  const dispatch = useDispatch();

  const removeFoodItem = (id, name) => {
    dispatch(removeItemFromCart({ id, name }));
  };

  const handleDecreaseCart = (id, name, quantity) => {
    dispatch(decreaseItemFromCart({ id, name, quantity }));
  };

  const handleIncreaseCart = (id, name, quantity) => {
    dispatch(increaseItemFromCart({ id, name, quantity }));
  };

  return (
    <div
      className="grid items-center grid-cols-5 gap-2 border-t-1 border-b-2 border-gray-300 py-8"
      key={id}
    >
      <div className="flex col-span-2 py-4">
        <img
          className="mr-3 w-25 max-w-full"
          src={ITEM_IMG_CDN_URL + imageId}
          alt={name}
        />
        <div className="col-span-2">
          <h3 className="pt-4  flex justify-center text-lg font-medium">
            {name}
          </h3>
          {/* <p>{description}</p> */}
          <button
            className="cursor-pointer hover:text-black  text-gray-500  rounded"
            onClick={() => removeFoodItem(id, name)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        {price > 0
          ? new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(price / 100)
          : " "}
      </div>
      <div className="flex itens-start justify-center">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
          onClick={() => handleDecreaseCart(id, name, quantity)}
        >
          -
        </button>
        <div className="bg-gray-100 text-gray-700 font-bold py-2 px-4">
          {quantity}
        </div>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
          onClick={() => handleIncreaseCart(id, name, quantity)}
        >
          +
        </button>
      </div>
      <div className="font-semibold flex justify-end">
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format((price / 100) * quantity)}
      </div>
    </div>
  );
};

export default Fooditems;
