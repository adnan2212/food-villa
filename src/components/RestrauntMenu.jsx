import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";
import { MenuShimmer } from "./shimmer";
import useRestaurnt from "../utils/useRestaurant";

const RestrauntMenu = () => {
  // const [restraunt, setRestraunt] = useState(null);
  const { id } = useParams();

  const restraunt = useRestaurnt(id);

  return !restraunt ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={
            IMG_CDN_URL +
            restraunt?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={restraunt.cards[0]?.card?.card?.info?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">
            {restraunt.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="restaurant-tags">
            {restraunt.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restraunt.cards[0]?.card?.card?.info?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restraunt.cards[0]?.card?.card?.info?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restraunt.cards[0]?.card?.card?.info?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restraunt.cards[0]?.card?.card?.info?.sla?.slaString}</div>
            <div>|</div>
            <div>{restraunt.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {
                Object?.keys(
                  restraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[1]?.card?.card?.itemCards
                ).length
              }{" "}
              ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {Object.values(
              restraunt.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
            ).map((item) => (
              <div className="menu-item" key={item?.card?.info?.name}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.card?.info?.name}</h3>
                  <p className="item-cost">₹ {item?.card?.info?.price / 100}</p>
                  <p className="item-desc">{item?.card?.info?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.card?.info?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
