import React from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

function Header({ theme, changeTheme}) {
  return (
    <div className="header">
      <div className="title">
        <h1>What Where</h1>
      </div>
      <div onClick={() => changeTheme()} className="theme">
        <div className="theme-logo">
          {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
        </div>
        <div className="theme-text">
          <p>{theme}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
