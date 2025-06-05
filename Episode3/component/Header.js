import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

export default Header;
