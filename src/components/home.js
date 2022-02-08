import React, { useState } from "react";
import gamesimg from "./gamesimg.png";
import { Link } from "react-router-dom";

const Home = ({ setUsername }) => {
  const [typedName, setTypedName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setTypedName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(typedName);
  };

  return (
    <main>
      <header className="App-header">
        <img
          height="400"
          src={gamesimg}
          className="App-logo"
          alt="games reviewed"
        />
      </header>
      <h2>
        have a browse at our reviews, add your comments and vote. Soon we'll be
        accepting your reviews too.
      </h2>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input
          id="text"
          type="text"
          onChange={handleChange}
          value={typedName}
        />
        <button id="login">Login</button>
      </form>
      <Link to="/reviews" id="genLink">
        <button type="button" id="seeReviewsBTN">
          see all reviews
        </button>
      </Link>
    </main>
  );
};

export default Home;
