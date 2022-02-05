export const describeRating = (rating) => {
  const ratingConvertedToNumber = Number(rating);

  if (!ratingConvertedToNumber || typeof ratingConvertedToNumber !== "number") {
    return "unknown";
  }

  if (ratingConvertedToNumber < 5) {
    return "bad";
  }

  if (ratingConvertedToNumber > 7) {
    return "good";
  }

  return "normal";
};
