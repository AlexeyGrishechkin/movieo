export const describeRating = (rating) => {
  const convertRatingToNumber = Number(rating);

  if (
    convertRatingToNumber === 0 ||
    !convertRatingToNumber ||
    typeof convertRatingToNumber !== "number"
  ) {
    return "unknown";
  }

  if (convertRatingToNumber < 5) {
    return "bad";
  }

  if (convertRatingToNumber > 7) {
    return "good";
  }

  return "normal";
};
