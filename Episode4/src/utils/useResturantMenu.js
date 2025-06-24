import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (resId) => {
  //fetch data
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  return { resInfo };
};

export default useResturantMenu;
