import { useState } from "react";
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const Body = () => {
  //state variable
  const [listOfResturant, setListOfResturant] = useState(resList);

  //Normal js variable

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfResturant.filter(
              (restro) => restro.rating > 4
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="restro-container">
        {listOfResturant.map((restaurant) => (
          <RestroCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
