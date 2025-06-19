import { RESTRO_IMG } from "../utils/constants";
const RestroCard = ({ resData }) => {
  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        src={RESTRO_IMG + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <div className="rating">
        <h4>⭐ {resData.avgRating} </h4>
        <h4>⏱️ {resData.info.sla.deliveryTime} mins</h4>
      </div>
      <h4 className="cusion">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="cusion">Cost For Two: {resData.info.costForTwo}</h4>
    </div>
  );
};

export default RestroCard;
