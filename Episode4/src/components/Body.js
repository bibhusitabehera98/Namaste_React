import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable
  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [newRestroList, setNewRestroList] = useState([]);

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.63270&lng=77.21980&str=resturant&trackingId=6e83aae7-34c8-99a6-1a15-ba92a2672203&submitAction=ENTER&queryUniqueId=ca11f1d9-f6a4-65e1-a928-efeb5583f688"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfResturant(
      jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setNewRestroList(
      jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  if (listOfResturant.length === 0) {
    return <Shimmer />;
  }

  //Normal js variable

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              //filter the resturant cards and upadte the UI
              //SearchText
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //filter the resturant cards and upadte the UI
              //SearchText

              const filteredRestro = listOfResturant.filter((restro) =>
                restro?.card?.card?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              setNewRestroList(filteredRestro);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
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
        {newRestroList.map((restaurant) => (
          <RestroCard key={restaurant.card.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
