import { useContext, useEffect, useState } from "react";
import RestroCard, { WithOpenLabel } from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //state variable
  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [newRestroList, setNewRestroList] = useState([]);
  const RestaurantCardOpen = WithOpenLabel(RestroCard);

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setListOfResturant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setNewRestroList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks Like You are Offline!! Please Ckeck Your internet Connection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-5 p-4">
        <div className="search">
          <input
            type="text"
            className="h-8 bg-amber-200 rounded-xl p-4"
            value={searchText}
            onChange={(e) => {
              //filter the resturant cards and upadte the UI
              //SearchText
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-sky-300 mx-2 p-4 rounded-xl"
            onClick={() => {
              //filter the resturant cards and upadte the UI
              //SearchText

              const filteredRestro = listOfResturant.filter((restro) =>
                restro?.info?.name
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
          className="mx-4 p-4 bg-red-500 text-white rounded-xl"
          onClick={() => {
            filteredList = listOfResturant.filter(
              (restro) => restro.avgRating > 4
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
        <div className="flex m-5 p-4">
          <label>UserName </label>
          <input
            className="border border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
          {/* <button></button> */}
        </div>
      </div>
      <div className="flex flex-wrap p-4 justify-around items-center ">
        {newRestroList.map((restaurant) => (
          // <RestroCard key={restaurant.card.card.info.id} resData={restaurant} />
          <Link
            className="link"
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
            {/* <RestroCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
