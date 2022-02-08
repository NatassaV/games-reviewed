import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import AddComment from "./AddComment";
import Comments from "./viewComments";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [visible, setVisible] = useState(true);
  const [visibleAddComment, setVisibleAddComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggle = () => {
    setVisible((currVisible) => {
      return !currVisible;
    });
  };

  const toggleAdd = () => {
    setVisibleAddComment((currVisible) => {
      setIsLoading(false);
      return !currVisible;
    });
  };

  const { review_id } = useParams();

  useEffect(() => {
    getReviews(null, review_id).then((res) => {
      setIsLoading(false);
      setReview(res);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <h2>Loading . . . </h2>
      ) : (
        <>
          <h2>
            <Link className="CatLink" to={`/reviews/${review.category}`}>
              {`<< ${review.category}`}
            </Link>
          </h2>
          <header className="App-header">
            <h1>{review.title}</h1>
          </header>

          <section className="single">
            <p>Written on : {review.created_at}</p>
            <p>By : {review.owner}</p>
            <p>Genre : {review.category}</p>
            <p>{review.review_body}</p>
            <img alt="" height={200} src={`${review.review_img_url}`} />
            <p>
              comments : {review.comment_count}
              <button onClick={toggle}>hide comments</button>
              <button id="add" onClick={toggleAdd}>
                add comment
              </button>
            </p>
            {visibleAddComment ? (
              <>
                <AddComment />
              </>
            ) : null}
            <p>
              votes : {review.votes}
              <button id="see"> + </button>
            </p>
          </section>
          {visible ? (
            <>
              <Comments />
            </>
          ) : null}
        </>
      )}
    </main>
  );
};

export default SingleReview;
