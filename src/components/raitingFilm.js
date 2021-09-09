import React from "react";
import { Rating } from "../styled";
import { colorRating } from "../utils/helpers/colorRating";

export const RatingFilm = ({ rating }) => {
  let hasRating = "";
  if (rating === 0) {
    hasRating = "-";
  } else {
    hasRating = rating.toFixed(1);
  }

  return <Rating colorRating={colorRating(rating)}>{rating.toFixed(1)}</Rating>;
};
