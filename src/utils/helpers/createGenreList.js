export const createGenreList = (genreList, filmGenres) => {
  return genreList
    .filter((genre) => filmGenres.indexOf(genre.id) !== -1)
    .map((genre) => genre.name)
    .join(", ");
};
