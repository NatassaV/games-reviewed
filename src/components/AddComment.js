import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { postComment } from "../utils/api";

const AddComment = () => {
  const [comment, setComment] = useState({ username: "", body: "" });
  const { review_id } = useParams();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setComment((currComment) => {
      const updatedComment = { ...currComment };
      updatedComment.username = "happyamy2016";
      updatedComment.body = value;
      return updatedComment;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(review_id, comment).then((res) => {
      window.location.reload(true);
    });
  };

  return (
    <>
      <h1>post a comment :</h1>
      <form onSubmit={handleSubmit}>
        <p>your comment : </p>
        <textarea
          id="text"
          rows="3"
          cols="50"
          onChange={handleOnChange}
          value={comment.body}
        />
        <p>username : happyamy2016</p>
        <button id="post">post</button>
      </form>
    </>
  );
};

export default AddComment;
