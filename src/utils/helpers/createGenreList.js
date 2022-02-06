export const createGenreList = (genreList, filmGenres) => {
  const genresFromGenresList = genreList.filter(
    (genre) => filmGenres.indexOf(genre.id) !== -1
  );

  if (genresFromGenresList.length === 0) {
    return "sorry, no genre data for this film";
  }

  return genresFromGenresList.map((genre) => genre.name).join(", ");
};
