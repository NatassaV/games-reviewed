import React from "react";
import { Link } from "react-router-dom";
import gamesimg from "./gamesimg.png";

const Nav = () => {
  return (
    <nav className="Nav">
      <header>
        <img
          height="150"
          src={gamesimg}
          className="App-logo"
          alt="games reviewed"
        />
      </header>
      <Link to="/">
        <p className="NavLink">Home</p>
      </Link>
      <Link to="/Genres">
        <p className="NavLink">Genres</p>
      </Link>
      <Link to="/users/:username">
        <p className="NavLink">My Profile</p>
      </Link>
    </nav>
  );
};

export default Nav;
