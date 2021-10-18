export const describeRating = (rating) => {
  if (rating === 0 || !rating) {
    return "unknown";
  }

  if (rating < 5) {
    return "bad";
  }

  if (rating > 7) {
    return "good";
  }

  return "normal";
};
