import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  console.log(loggedInUser);

  return (
    <div className="flex items-center justify-between bg-amber-300 sticky top-0 h-24 z-50">
      <div className="h-24 ml-4">
        <img className="h-[100%]" src={LOGO_URL} />
      </div>
      <div className="flex items-center justify-end ">
        <ul className="flex px-4 m-4 items-center justify-end">
          <li className="px-4 ">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className=""
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
