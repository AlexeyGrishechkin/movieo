export const createGenreList = (genreList, filmGenres) => {
  const findGenresInGenresList = genreList.filter(
    (genre) => filmGenres.indexOf(genre.id) !== -1
  );

  if (findGenresInGenresList.length === 0) {
    return "sorry, no genre data for this film";
  }

  return findGenresInGenresList.map((genre) => genre.name).join(", ");
};
