import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Genre } from "../styled";
import moment from "moment";

const RenderGenres = (props) => {
  const { MovieStore, releaseDate, hasGenre } = props;

  useEffect(() => {
    MovieStore.getGenresList();
  }, []);

  const genreList = MovieStore.genres
    .filter((genre) => hasGenre.indexOf(genre.id) !== -1)
    .map((genre) => genre.name)
    .join(", ");

  return (
    <Genre>
      {moment(releaseDate).format("YYYY")} - {genreList}
    </Genre>
  );
};

export default inject("MovieStore")(observer(RenderGenres));
