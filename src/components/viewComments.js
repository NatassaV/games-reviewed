import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";

const Comments = () => {
  const [commentsList, setCommentsList] = useState([]);

  const { review_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(review_id).then((res) => {
      setIsLoading(false);
      setCommentsList(res);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <h2>Loading comments. . . </h2>
      ) : (
        <>
          <header className="App-header">
            <h1>comments</h1>
          </header>
          <ul>
            {commentsList.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <p>written on: {comment.created_at}</p>
                  <p>by : {comment.author}</p>
                  <p>{comment.body}</p>
                  <p>
                    votes : {comment.votes}
                    <button id="see"> + </button>
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
};

export default Comments;
