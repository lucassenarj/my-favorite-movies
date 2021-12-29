import React from "react";
import { ReviewListItem } from "..";
import Review from "../../types/Review";
import "./style.scss";

type Props = {
  resource: {
    reviews: {
      read: Function
    }
  }
};

function ReviewList({ resource }: Props) {
  const { data } = resource.reviews.read();
  const reviews: Review[] = data.results;
  return (
    <div className="anime__details__review">
      <div className="section-title">
        <h5>Reviews</h5>
      </div>
      {
        reviews
          .sort((a, b) => parseInt(b.created_at) - parseInt(a.created_at))
          .map((review: Review) => <ReviewListItem {...review} key={review.id} />)
      }
    </div>
  );
};

export default ReviewList;