export const colorRating = (rating) => {
  if (rating === 0 || rating === null) {
    return "normal";
  }
  if (rating < 5) {
    return "bad";
  }
  if (rating > 7) {
    return "good";
  }

  return "normal";
};
