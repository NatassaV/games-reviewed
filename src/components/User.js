import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUsers } from "../utils/api";

const User = ({ username }) => {
  const [user, setUser] = useState({ username: "", name: "", avatar_url: "" });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers(username).then((res) => {
      setIsLoading(false);
      setUser(res);
    });
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>My profile</h1>
      </header>
      <h1>{username}</h1>
      {isLoading ? (
        <h2>Loading . . . </h2>
      ) : (
        <>
          <img id="avatar" alt="avatar image" src={`${user.avatar_url}`} />
          <button>see my comments</button>
        </>
      )}
    </>
  );
};

export default User;
