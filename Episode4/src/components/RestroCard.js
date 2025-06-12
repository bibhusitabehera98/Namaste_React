import { RESTRO_IMG } from "../utils/constants";
const RestroCard = ({ resData }) => {
  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        src={RESTRO_IMG + resData.card.card.info.cloudinaryImageId}
      />
      <h3>{resData.card.card.info.name}</h3>
      <div className="rating">
        <h4>⭐ {resData.card.card.info.avgRating} </h4>
        <h4>⏱️ {resData.card.card.info.sla.deliveryTime} mins</h4>
      </div>
      <h4 className="cusion">{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4 className="cusion">
        Cost For Two: {resData.card.card.info.costForTwo / 100} Rupees
      </h4>
    </div>
  );
};

export default RestroCard;
