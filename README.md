# games-reviewed

An app that allows the user to navigate through reviews for a list of games, create a profile and add their comments.

Deloyed on Netlify : https://reviews-games.netlify.app/

REST api
Data was provided and kept in backend. 
PSQL, express, jest, React.

enpoints: 
GET /api/categories

GET /api/reviews
GET /api

PATCH /api/reviews/:review_id:
    updates the votes on the requested review.

GET /api/reviews/:review_id:
   serves the requested review
 
GET /api/reviews/:review_id/comments:
    serves the comments related to a specific review

POST /api/reviews/:review_id/comments:
    adds a new comment to the review with review_id

DELETE /api/comments/:comment_id:
    deleted a comment
