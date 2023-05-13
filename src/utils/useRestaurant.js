import { useState, useEffect } from "react";

import { swiggy_menu_url } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(swiggy_menu_url + id);
      const json = await data.json();
      setRestaurant(json.data.cards[0].card.card.info);
      setRestaurantMenu(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      );
    } catch (error) {
      console.log(error);
    }
  }

  return [restaurant, restaurantMenu];
};

export default useRestaurant;
