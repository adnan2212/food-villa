import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";

const FootItem = ({ name, imageId, price, functionName }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} alt={name} />
      <h3>{name}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FootItem;
