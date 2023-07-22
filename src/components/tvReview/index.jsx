import React from "react";

const tvReview =  ({ review }) => {
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};
export default tvReview