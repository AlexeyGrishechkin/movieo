import React from "react";
import { Rating } from "../styled";
import { describeRating } from "../utils/helpers/describeRating";

export const RatingFilm = ({ rating }) => {
  if (rating === 0) {
    return null;
  }

  return (
    <Rating data-testid="rating-film" describeRating={describeRating(rating)}>{rating.toFixed(1)}</Rating>
  );
};
