import { useParams } from "react-router-dom";

import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";
import { MenuShimmer } from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartReducer";

const RestaurantMenu = () => {
  // const [restraunt, setRestraunt] = useState(null);
  const { id } = useParams();
  const [restaurant, restaurantMenu] = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItemToCart(item.card.info));
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurant?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {restaurantMenu?.card?.itemCards?.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list" data-testid="menu">
            {(restaurantMenu?.card?.itemCards).map((item) => (
              <div className="menu-item" key={item.card.info.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item.card.info.name}</h3>
                  <p className="item-cost">
                    {item.card.info.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item.card.info.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item.card.info.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item.card.info.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item.card.info.imageId}
                      alt={item.card.info.name}
                    />
                  )}
                  <button
                    data-testid="add-btn"
                    className="add-btn"
                    onClick={() => addFoodItem(item)}
                  >
                    {" "}
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
