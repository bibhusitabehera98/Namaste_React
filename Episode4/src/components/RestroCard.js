import { RESTRO_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestroCard = ({ resData }) => {
  return (
    <div className="rounded-2xl p-3 bg-gray-100 m-4  max-w-[300] hover:bg-gray-300 ">
      <img
        className="max-w-xs bg-cover rounded-2xl w-full "
        src={RESTRO_IMG + resData?.info?.cloudinaryImageId}
      />
      <h3 className="font-bold">{resData?.info?.name}</h3>
      <div className="rating">
        {/* <h4>⭐ {resData.info.avgRating} </h4> */}
        {resData.info.avgRating && resData.info.avgRating > 0 && (
          <h4>⭐ {resData.info.avgRating}</h4>
        )}
        <h4>⏱️ {resData.info.sla.deliveryTime} mins</h4>
      </div>
      <h4 className="flex ">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="cusion">Cost For Two: {resData.info.costForTwo}</h4>
    </div>
  );
};

// Higher order component
//input- restocard => restarunt card with open label

export const WithOpenLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="relative top-12 px-4 py-0.5 m-4  bg-black text-white">
          Open
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
