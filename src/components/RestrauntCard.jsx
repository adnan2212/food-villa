// import StarIcon from "@mui/icons-material/Star";
import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  area,
  costForTwoString,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span>
        <h4
          style={
            avgRating < 3.5
              ? { backgroundColor: "var(--light-red)" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestrauntCard;
