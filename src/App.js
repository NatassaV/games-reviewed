import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/navMain";
import Home from "./components/home";
import Categories from "./components/categories";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import Comments from "./components/viewComments";

import User from "./components/User";

function App() {
  const [username, setUsername] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home setUsername={setUsername} />} />
          <Route path="/Genres" element={<Categories />} />
          <Route path="/reviews/:category" element={<Reviews />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="reviews/review/:review_id" element={<SingleReview />} />
          <Route
            path="reviews/review/:review_id/comments"
            element={<Comments />}
          />
          <Route
            path="users/:username"
            element={<User username={username} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
