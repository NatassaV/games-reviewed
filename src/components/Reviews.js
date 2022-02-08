import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);

  const { category } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews(category).then((res) => {
      setIsLoading(false);
      setReviewsList(res);
    });
  }, [category]);

  return (
    <main>
      <h2>
        <Link className="CatLink" to="/reviews">
          {"see all reviews"}
        </Link>
      </h2>
      {isLoading ? (
        <h2>Loading . . . </h2>
      ) : (
        <>
          <header className="App-header">
            <h1>{category} Reviews</h1>
          </header>
          <ul>
            {reviewsList.map((review) => {
              return (
                <li key={review.review_id}>
                  <Link
                    className="NavLink"
                    to={`/reviews/review/${review.review_id}`}
                  >
                    {review.title}
                    <p>written on: {review.created_at}</p>
                    <p>by : {review.designer}</p>
                    <p>votes: {review.votes}</p>
                    <p>comments: {review.comment_count}</p>
                    <img
                      id="reviewsimg"
                      height={120}
                      src={`${review.review_img_url}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
};

export default Reviews;
