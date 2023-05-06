import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestrauntCard from "./RestrauntCard";
import { restrauntData, swiggy_api_url } from "../config";
import Shimmer from "./shimmer";
import useOnline from "../utils/useOnline";

function filterData(searchText, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestraunts, setAllRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const onClickHandler = () => {
    searchData(searchText, allRestraunts);
  };

  useEffect(() => {
    getRestraunts();
  }, []);

  const getRestraunts = async () => {
    try {
      const data = await fetch(swiggy_api_url);
      const json = await data.json();
      setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  //if search data is empty show error message
  const searchData = (searchText, restraunts) => {
    if (searchText !== "") {
      const data = filterData(searchText, restraunts);
      setFilteredRestraunts(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found!");
      }
    } else {
      setErrorMessage("");
      setFilteredRestraunts(restraunts);
    }
  };

  const isOnline = useOnline();

  if (!isOnline)
    return (
      <h1 style={{ padding: 100 }}>
        🛑 OFFLINE, PLEASE CHECK YOUR INTERNET CONNECTION!!!
      </h1>
    );

  // not rendered component (Early return)
  if (!allRestraunts) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={onChangeHandler}
        />
        <button className="search-btn" onClick={onClickHandler}>
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {filteredRestraunts?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restraunt-list">
          {filteredRestraunts.map((restraunt) => {
            return (
              <Link
                // to={`/restaurant/${restraunt.cards[0]?.card?.card?.info?.id}`}
                to={`/restaurant/${restraunt.data.id}`}
                key={restraunt.data.id}
              >
                <RestrauntCard {...restraunt.data} />
              </Link>
            );
          })}

          {/* <RestrauntCard
        cloudinaryImageId={restrauntData[0].data.cloudinaryImageId}
        name={restrauntData[0].data?.name}
        cuisines={restrauntData[0].data?.cuisines.join(", ")}
        avgRating={restrauntData[0].data?.avgRating}
        lastMileTravelString={restrauntData[0].data?.lastMileTravelString}
      /> */}
        </div>
      )}
    </>
  );
};

export default Body;
