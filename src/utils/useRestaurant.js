import { useState, useEffect } from "react";

import { swiggy_menu_url } from "../config";

const useRestaurnt = (id) => {
  const [restraunt, setRestraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(swiggy_menu_url + id);
    const json = await data.json();
    setRestraunt(json.data);
  }

  return restraunt;
};

export default useRestaurnt;
