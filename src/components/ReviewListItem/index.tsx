import React from "react";
import getAuthorsAvatar from "../../helpers/getAuthorsAvatar";
import Review from "../../types/Review";
import "./style.scss";

function ReviewListItem(review: Review) {
  return (
    <div className="anime__review__item">
      <div className="anime__review__item__pic">
        <img 
          src={getAuthorsAvatar(review.author_details.avatar_path)} alt={review.author} />
      </div>
      <div className="anime__review__item__text">
        <h6>{review.author} - <span> {new Date(review.created_at).toLocaleDateString()} </span></h6>
        <p>{review.content}</p>
      </div>
    </div>
  );
};

export default ReviewListItem;
