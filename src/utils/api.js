import axios from "axios";

const GamesApi = axios.create({
  baseURL: "https://games-reviewed.herokuapp.com/api",
});

export const getGenres = () => {
  return GamesApi.get("/categories")
    .then((res) => {
      return res.data.categories;
    })
    .catch((err) => {});
};

export const getReviews = (aCategory, aReview) => {
  if (aReview) {
    return GamesApi.get(`/reviews/${aReview}`)
      .then(function (res) {
        return res.data.review;
      })
      .catch((err) => {});
  } else {
    return GamesApi.get(`/reviews`, {
      params: {
        category: aCategory,
      },
    })
      .then(function (res) {
        return res.data.reviews;
      })
      .catch((err) => {});
  }
};

export const getComments = (aReview_id, aUser) => {
  return GamesApi.get(`reviews/${aReview_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (aReview_id) => {
  return GamesApi.post(`reviews/${aReview_id}/comments`).then((res) => {
    return res.data.comment;
  });
};

export const getUsers = (aUsername) => {
  return GamesApi.get(`users/${aUsername}`).then((res) => {
    console.log(res);
    return res.data.user;
  });
};
