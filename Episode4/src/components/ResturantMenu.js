import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTRO_IMG, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();

    setResInfo(jsonData.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card.card;

  // console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <div className="rating-container">
        <div className="rating-card">
          <h3 className="rating">
            ⭐ {avgRating} ({totalRatingsString}) . {costForTwoMessage}
          </h3>
          <h4 className="cuisine">{cuisines.join(", ")}</h4>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>
      <h2>Menu</h2>
      <div className="menu-container">
        <div className="menu-data">
          {itemCards.map((itemCard) => {
            return (
              <div className="menu-info" key={itemCard.card.info.id}>
                <div className="menu-item" key={Math.random()}>
                  <h3 key={itemCard.card.info.id}>{itemCard.card.info.name}</h3>
                  <h4>&#8377;{itemCard.card.info.defaultPrice / 100} </h4>
                  <h4>
                    ⭐{itemCard.card.info.ratings.aggregatedRating.rating}
                  </h4>
                  <p>{itemCard.card.info.description}</p>
                  <hr />
                </div>
                <div className="menu-img">
                  <img
                    src={RESTRO_IMG + itemCard.card.info.imageId}
                    key={itemCard.card.info.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
