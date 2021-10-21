import React from "react";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { Genre } from "../styled";

const RenderGenres = (props) => {
  const { MovieStore, releaseDate, hasGenre } = props;

  const createGenreList = (genreList) =>
    genreList
      .filter((genre) => hasGenre.indexOf(genre.id) !== -1)
      .map((genre) => genre.name)
      .join(", ");

  return (
    <Genre>
      {moment(releaseDate).format("YYYY")} -{" "}
      {createGenreList(MovieStore.genres)}
    </Genre>
  );
};

export default inject("MovieStore")(observer(RenderGenres));
