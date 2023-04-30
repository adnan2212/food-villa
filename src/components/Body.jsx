import { useState, useEffect } from "react";

import RestrauntCard from "./RestrauntCard";
import { restrauntData } from "../config";

function filterData(searchText, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt.data.name.includes(searchText)
  );
}

const Body = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getRestraunts();
  }, []);

  const getRestraunts = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestraunts(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={onChangeHandler}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, restraunts);
            setRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restraunts.map((restraunt) => {
          return <RestrauntCard key={restraunt.data.id} {...restraunt.data} />;
        })}

        {/* <RestrauntCard
        cloudinaryImageId={restrauntData[0].data.cloudinaryImageId}
        name={restrauntData[0].data?.name}
        cuisines={restrauntData[0].data?.cuisines.join(", ")}
        avgRating={restrauntData[0].data?.avgRating}
        lastMileTravelString={restrauntData[0].data?.lastMileTravelString}
      /> */}
      </div>
    </>
  );
};

export default Body;
