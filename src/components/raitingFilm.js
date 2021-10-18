import React from "react";
import { Rating } from "../styled";
import { describeRating } from "../utils/helpers/describeRating";

export const RatingFilm = ({ rating }) => {
  let hasRating = "";

  if (rating === 0) {
    hasRating = "-";
  } else {
    hasRating = rating.toFixed(1);
  }

  return <Rating describeRating={describeRating(rating)}>{hasRating}</Rating>;
};
