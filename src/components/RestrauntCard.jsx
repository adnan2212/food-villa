import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5>{lastMileTravelString}</h5>
    </div>
  );
};

export default RestrauntCard;
