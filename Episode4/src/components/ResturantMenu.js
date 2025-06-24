import { useState } from "react";
import Shimmer from "./Shimmer";
import { RESTRO_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import MenuCategory from "./MenuCategory";

const ResturantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const { resInfo } = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("Category", categories);

  return (
    <div className="flex flex-col">
      <h1 className="text-center font-bold text-2xl my-8">{name}</h1>
      <div className="flex flex-col self-center m-4 p-4 justify-center items-center border-2 w-2xl  shdow-xl bg-gray-200 rounded-xl">
        <h3 className="rating">
          ⭐ {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </h3>
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h3>{costForTwoMessage}</h3>
      </div>
      {/* category Accordians */}

      {categories.map((category, index) => (
        <MenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
